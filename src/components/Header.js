import { Link } from "react-router";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState,useContext } from "react";
import useonlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const onlineStatus = useonlineStatus();

    const [ReactBtn, setReactBtn] = useState("login")
 
    const {loggedInUser} = useContext(UserContext)
    console.log(loggedInUser)
    //subscribing to the store using  a selector
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)

    // when click button it click it will not change on button only it will render all page prove it with console.log
    useEffect(() => {
        // console.log("useEffects is render")
    }, [])
    return (
        <div className="flex justify-between  bg-pink-400 shadow-2xl m-2 ">
            <div className="logo-header">
                <img className="w-30" src={LOGO_URL} />
            </div>
            <div className="flex items-center">


                <ul className="flex m-4 p-4 gap-8">
                    <li>Online Status{onlineStatus ? "✅" : "🔴"} </li>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li ><Link to="/contact">Contact</Link></li>
                    <li ><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl" ><Link to="/cart">Cart({cartItems.length} items)</Link></li>
            
                    <button className="btn-logic" onClick={() => {
                        ReactBtn === "login" ? setReactBtn("logout") : setReactBtn("login")
                    }}>{ReactBtn}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;