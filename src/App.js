import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestruentCart from "./components/RestruentCart";
import App from "../App.css"
// components - it is a just a arrow function 


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)


