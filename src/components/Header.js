import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;