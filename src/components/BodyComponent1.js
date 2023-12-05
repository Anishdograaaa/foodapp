// import resList from "../utils/metadata";
import Card from "./Card";
import useBodyComponent from "../utils/useBodyComponent";
import useBodyComponent2 from "../utils/useBodycomponent2";
import Shimmer from "./Shimmer";
import useBodyComponent4 from "../utils/useBodyComponent4";
import {Link} from "react-router-dom";
import {useState,useContext} from "react";
import useOnlineCheck from "../utils/useOnlineCheck";
import { WithPromotedLabel } from "./Card";
import UserContext from "../utils/UserContext";
import useBodyComponent3 from "../utils/useBodyComponent3";



const BodyComponent = ()=>{
    
    const {loggedInUser,setusername} = useContext(UserContext);
    const filteredlist = useBodyComponent();
    const listrest = useBodyComponent2();
    const setlistrest = useBodyComponent3();
    const setfilteredlist = useBodyComponent4();
    const [ searchtext,setsearchtext] = useState("");
    const onlineCheck = useOnlineCheck();
    const RestaurantCardPromoted = WithPromotedLabel(Card)

    if (onlineCheck == false){
        return <h1>OOPS Looks like you are offline</h1>
    }
    
    
    // if (listrest.length == 0){
    //     return <Shimmer/>
    // }
    // if (filteredlist.length == 0){
    //     return <Shimmer/>
    // }
    
    return (
        <div className="body">
            
            <div className="btn-container"> 
               <input type="search" className="px-1 py-0.5 m-3 border border-solid border-black rounded-lg" value={searchtext} data-testid = "searchinput" onChange={(e) =>{
                setsearchtext(e.target.value)
               }}></input>
               <button className="bg-green-100 mx-0 px-4 py-2 rounded-lg" onClick={()=>{
                const filteredlist = listrest.filter(
                    (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                )
                setfilteredlist(filteredlist)
               }}>val</button>
               <button className="bg-green-100 mx-10 px-4 py-2 rounded-lg" onClick={()=>{
                const filteredlist = listrest.filter(
                    (res) => res.info.avgRating < 4
                );
                setlistrest(filteredlist);
               }}
               >Highest Rated Restaurant </button>
               <input type="search" className="px-1 py-0.5 m-3 border border-solid border-black rounded-lg" value={loggedInUser} onChange={(e) =>{
                setusername(e.target.value)
               }}></input>
            </div>
            <div className="flex flex-wrap justify-center" >
                {
                   filteredlist.map((restaurants)=>(
                    
                    <Link key = {restaurants.info.id} to = {"/restaurants/"+ restaurants.info.id}> 
                    {restaurants.info.isOpen? <RestaurantCardPromoted  resData = {restaurants}/>:<Card resData = {restaurants}/>}</Link>
                   )) 
                }  
                console.log(key)
            </div>
        </div>
    )
}

export default BodyComponent;