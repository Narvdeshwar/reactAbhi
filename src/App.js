import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import Restaurant from "./components/Restaurant";
// import Grocery from "./components/Grocery";

import UserContext from "./utils/UserContext"

import {
    createBrowserRouter,
    createBrowserRouter as Router,
    RouterProvider, Outlet
} from "react-router";

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))
import { lazy, Suspense, useEffect, useState } from "react";


// components - it is a just a arrow function 


const AppLayout = () => {

    const [userName, setUserName] = useState()

useEffect(() => {
    // make an Api call to userName and password 
    const data = {
        name: "Abhishek yadav",
    }
    setUserName(data.name)
}, [])
    return (
        <>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>

            <div className="app">
                {/* <UserContext.Provider value={{ loggedInUser: "jacky" }}> */}
                <Header />
                 {/* </UserContext.Provider> */}
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
       </>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <Restaurant />

            }
        ],
        errorElement: <Error />
    },


])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />)


