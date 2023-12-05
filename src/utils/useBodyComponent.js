import { useState,useEffect } from "react";
const useBodyComponent = () =>{
    
    const [filteredlist,setfilteredlist] = useState([]);
    useEffect(()=>{
        fetchdata()
    },[]);
    
    const fetchdata = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // setlistrest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    return filteredlist
} 

export default useBodyComponent