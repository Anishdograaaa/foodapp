import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
// import appStore from "../utils/appStore";
import {  useSelector } from "react-redux";
// import stylesheet from "index.css";
const Headercomponent = ()=>{
const [loginb,setloginb] = useState("Login");
const {loggedInUser} = useContext(UserContext);
const cartitem = useSelector((store) => store.cart.items)
return (
    <div className="flex bg-red-500 justify-between">
        <div className="logo">
            <img className="w-36" src = {LOGO_URL}/>
        </div>
        <div className="flex items-center px-8 mx-12">
            <ul className="flex">
               <li className="px-4">
               <Link to="/"> Home </Link></li>
                <li className="px-4"><Link to="/about"> About us </Link></li>
                <li className="px-4"><Link to="/contact"> Contact </Link></li>
                <li className="px-4"><Link to="/cart"> Cart({cartitem.length} items) </Link></li>
                <button className="logi" onClick ={()=>{
                         loginb == "Login" ?  setloginb("Logout") : setloginb("Login") 
                }
                

                }>{loginb}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
);
}

export default Headercomponent;