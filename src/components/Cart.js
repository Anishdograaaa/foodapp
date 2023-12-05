import Itemlist from "./Itemlist";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{
    const dispatch = useDispatch();
    const handleclearcart = ()=>{
        dispatch(clearCart())
    }
    const cartitems = useSelector((store)=>store.cart.items);
        return(
        <div className="text-center">
            <h1 className="p-2 m-2 font-bold text-lg">This is cart</h1>
            <div>
                <button className="p-2 m-2 bg-black text-yellow-50 rounded-2xl" onClick={handleclearcart}>clear cart</button>
                {cartitems.length == 0 && <h1>No item in cart add more items in it</h1>}
                <Itemlist item = {cartitems}/>
            </div>
        </div>
    )
}

export default Cart;