import RestruentCart from "./RestruentCart";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";


import useonlineStatus from "../utils/useonlineStatus";
const Body = () => {
  const [ListData, setListdata] = useState([]);
  const [seachText, setSearchText] = useState("");
  const [filterRestaurantes, setfilterRestaurantes] = useState([]);


  useEffect(() => {
    fetchData()

  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6075627&lng=77.3683319&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const json = await data.json();

    //optional chaining
    const result = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListdata(result)
    setfilterRestaurantes(result)

  }

  const onlineStatus = useonlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Look like you are offline !! Please you are check internet connection</h1>)


      const {loggedInUser,setUserName}= useContext(UserContext)

  return ListData?.length === 0 ? (<Shimmer />) : (
    <>
      <div className="mx-10">
        <div className="body-main flex items-center">
          <div className="Search m-4 p-4">
            <input type="text" className="search-box border-2 border-solid "
              value={seachText} onChange={(e) => {
                setSearchText(e.target.value)
              }} />
            <button className="px-3 py-1 mx-2 bg-green-400 rounded-lg " onClick={() => {
              //filter the restrurnts cards and update the Ui
              //searchBox

              const filterRestaurant = ListData.filter(
                (res) => res?.info?.name?.toLowerCase().includes(seachText.toLowerCase()))
              setfilterRestaurantes(filterRestaurant);
            }}>Search</button>
          </div>
          <div>
            <button className="button  px-3 py-1 bg-red-400 mask-circle rounded-lg"
              onClick={() => {
                const filteredList = ListData.filter(
                  (res) => res.info.avgRating > 4);


                setListdata(filteredList)
              }}>Top Rated Restruent</button></div>

               <div>
                <div className="p-2 my-4">
                    <label className="font-bold gap-4">UserName:</label>
                    <input  type="text" className="search-box border-2 border-solid " 
                    value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
                   </div>
               </div>
        </div>



        <div className="flex flex-wrap">
          {
            filterRestaurantes?.map((list) => (
              <Link key={list.info.id} to={"/restaurant/id" + list.info.id} className="flex">  <RestruentCart resdata={list} /></Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Body;