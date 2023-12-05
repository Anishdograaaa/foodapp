import { MENU_URL } from "./constants";
import { useState,useEffect } from "react";
const useRestaurantMenu = (resId) =>{
    const [restmenu,setrestmenu] = useState(null);
    useEffect(()=>{
        fetchd()
    },[]
    
    );
    const fetchd = async ()=>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json()
        console.log(json)
        setrestmenu(json.data)
    }
    return restmenu;
} 

export default useRestaurantMenu; 