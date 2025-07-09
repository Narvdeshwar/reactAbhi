import { useDispatch, useSelector } from "react-redux"
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items);
    console.log("cart check",cartItems)
    const  dispatch = useDispatch();

    const handleClearCart = ()=>{
          dispatch(clearCart())
    }
return (
    <>
    <div className="text-center m-10 p-10">
      <h1 className=" text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">

      <button className="bg-black hover:bg-sky-700  text-white rounded-lg  p-1 m-1 "
      onClick={handleClearCart}>clear cart</button>
      {
        cartItems.length === 0 && (
            <h1> Cart item is Empty .Please add item in the cart!</h1>
        )
      }
        <ItemsList  items={cartItems}/>
      </div>
    </div>
    
    </>
)
}
export default Cart