
import Shimmer from "./Shimmer";
import Restaurantitems from "./Restaurantitems";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useState } from "react";
const RestaurantMenu = () => {
   
    const {resId} = useParams();
    const restmenu = useRestaurantMenu(resId)
    const [showitem,setshowitem] = useState(0);

    
    if(restmenu == null) return <Shimmer/>
    const {name,city,costForTwoMessage,cuisines,avgRating,veg} = restmenu?.cards[0]?.card?.card?.info;
    const {itemCards} = restmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card; 
    const categories = restmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
        c?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )
    console.log(categories)
    return (
        <div className="p-2 m-2 align-bottom text-center" >
             <h1 className="text-3xl text-center p-2">{name}</h1>
             <p>{city}</p>
             <p>{costForTwoMessage}</p>
             <p>{cuisines}</p>
             <p>{avgRating}</p>
             <p>{veg}</p>

             
                {categories.map((category,index)=>(
                    <Restaurantitems key ={category.card?.card?.title} data = {category.card?.card} 
                     cbool = {index == showitem ? true:false}
                     setshowitem = {()=>setshowitem(index)}
                     />
                ))
                }
             
             
        </div>
        
    )
}

export default RestaurantMenu;