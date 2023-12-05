import {CDN_LINK  } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice"
const Itemlist = ({item})=>{
    const dispatch = useDispatch();
    console.log(item)
    const handleadditem = (it)=>{
        dispatch(addItems(it))
    }
    return (
        
<div className="">
    
        { item.map((it) => (
            <div data-testid = "fooditems" className="border-b-2 bg-slate-50 flex justify-between" key = {it.card.info.id}>
                <div className="w-8/12">
                <div className="p-1 m-1 font-bold text-left text-sm">
                <span>{it.card.info.name}</span>
                <span> - ₹{it.card.info.price/100}</span>
                </div>
                <p className="text-xs text-left p-2 m-2">{it.card.info.description}</p>
                </div>
                <div>
                <img src={CDN_LINK+it.card.info.imageId} className="w-[120px] m-2 rounded-lg"/>
                <button className="bg-black text-white text-xs px-2 rounded-lg" onClick={()=>{handleadditem(it)}}>Add</button>
                </div>
            </div>
            
        )
        
        )}
    
    
</div>
    )
}
export default Itemlist