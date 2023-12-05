import Itemlist from "./Itemlist"
import { useState } from "react"
const Restaurantitems = ({data,cbool,setshowitem}) => {
    
     const collapse =() =>{
         setshowitem() ;
        }
    return (
      <div className="w-6/12 p-2 mx-auto my-6 bg-slate-100 shadow-lg ">
        <div className="justify-between flex">
        <span className="font-bold text-base cursor-pointer" onClick={collapse}>{data.title}({data.itemCards.length})</span>
        <span>^</span>
        </div>
        { cbool && <Itemlist item={data.itemCards}/>}

      </div>
    )
}
export default Restaurantitems  