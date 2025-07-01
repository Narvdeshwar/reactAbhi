import { Link } from "react-router";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
const Header = () => {
  
    
    const [ReactBtn,setReactBtn] = useState("login")
    console.log("header")

    // when click button it click it will not change on button only it will render all page prove it with console.log
    useEffect(()=>{
        console.log("useEffects is render")
    },[])
    return (
        <div className="header">
            <div className="logo-header">
                <img className="image-f" src={LOGO_URL} />
            </div>
            <div className="List-Item">

                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li ><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="btn-logic" onClick={()=>{
                      ReactBtn === "login" ? setReactBtn ("logout"):setReactBtn ("login")
                    }}>{ReactBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;