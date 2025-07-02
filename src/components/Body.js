import RestruentCart from "./RestruentCart";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import  mockdata from "../utils/mockdata"

import useonlineStatus from "../utils/useonlineStatus";
const Body = () => {
    const [ListData,setListdata] = useState([]);
    const [seachText,setSearchText] = useState("");
    const [filterRestaurantes,setfilterRestaurantes] = useState([]);
    
    useEffect(()=>{
      fetchData()
    },[]);

  const fetchData = async () =>{
    const data = await  fetch(
       mockdata
    )
   
    const json = await data.json();
    console.log(json)
    //optional chaining
    const result = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListdata(result)
    setfilterRestaurantes(result)
   
  }

  const onlineStatus = useonlineStatus();
  if(onlineStatus === false)
    return(
  <h1>Look like you are offline !! Please you are check internet connection</h1>)
    
  
return  ListData?.length === 0 ? (<Shimmer/>):(
        <>
            <div className="body-main">
                <div className="Search">
              <input type="text" className="search-box" 
              value={seachText} onChange={(e)=>{
                setSearchText(e.target.value)
              }}/>
              <button onClick={()=>{
                //filter the restrurnts cards and update the Ui
                //searchBox
       
              const filterRestaurant =  ListData.filter(
                (res)=>res?.info?.name?.toLowerCase().includes(seachText.toLowerCase()))   
            setfilterRestaurantes(filterRestaurant);
                 }}>Search</button>
                </div>
                    <button className="filter-btn"
                        onClick={() =>{
                            const filteredList = ListData.filter(
                                (res) => res.info.avgRating > 4);
                                
                            
                        setListdata(filteredList)
                        }}>Top Rated Restruent</button></div>
            <div className="div">
                {
                    filterRestaurantes?.map((list) => (
                      <Link key={list.info.id} to={"/restaurant/id" + list.info.id}>  <RestruentCart  resdata={list} /></Link>
                    ))
                }
            </div>
        </>
    )
}

export default Body;