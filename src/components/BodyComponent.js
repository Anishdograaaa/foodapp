import Card from "./Card";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {useState,useContext,useEffect} from "react";
import useOnlineCheck from "../utils/useOnlineCheck";
import { WithPromotedLabel } from "./Card";
import UserContext from "../utils/UserContext";

const BodyComponent= () =>{
    const {loggedInUser,setusername} = useContext(UserContext);
    const [listrest, setlistrest] = useState([]);
    const [filteredlist, setfilteredlist] = useState([]);
    const [ searchtext,setsearchtext] = useState("");
    const onlineCheck = useOnlineCheck();
    const RestaurantCardPromoted = WithPromotedLabel(Card)
    useEffect(()=>{
        fetchdata()
    },[]);
    
    const fetchdata = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        
        setfilteredlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistrest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    
        
    }
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
                setfilteredlist(filteredlist);
               }}
               >Highest Rated Restaurant </button>
               <input type="search" className="px-1 py-0.5 m-3 border border-solid border-black rounded-lg" value={loggedInUser} onChange={(e) =>{
                setusername(e.target.value)
               }}></input>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                   filteredlist.map((restaurants)=>(
                    
                    <Link key = {restaurants.info.id} to = {"/restaurants/"+ restaurants.info.id}> 
                    {restaurants.info.isOpen? <RestaurantCardPromoted  resData = {restaurants}/>:<Card resData = {restaurants}/>}</Link>
                   )) 
                }  
                
            </div>
        </div>
    )
}

export default BodyComponent;

