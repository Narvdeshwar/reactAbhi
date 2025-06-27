import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  
    const [ReactBtn,setReactBtn] = useState("login")

    // when click button it click it will not change on button only it will render all page prove it with console.log
    console.log("render the page")
    return (
        <div className="header">
            <div className="logo-header">
                <img className="image-f" src={LOGO_URL} />
            </div>
            <div className="List-Item">

                
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="btn-logic" onClick={()=>{
                      ReactBtn === "login" ? setReactBtn ("logout"):setReactBtn ("login")
                    }}>{ReactBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;