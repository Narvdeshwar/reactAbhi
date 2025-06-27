import RestruentCart from "./RestruentCart";
import ListData from "../utils/mockdata";
import { useEffect, useState } from "react";
import relist from './../utils/mockdata';
import Shimmer from "./Shimmer";

const Body = () => {
    const [ListData,setListdata] = useState([]);

    const [seachText,setSearchText] = useState("");
    
    useEffect(()=>{
      fetchData()

    },[]);

  const fetchData = async () =>{
    const data = await  fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )

    const json = await data.json(data);
    //optional chaining
    const result = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(result)
    setListdata(result)
    // console.log(json);
  }

  // conditional rendering
//   if(ListData.length === 0){
//  return <Shimmer/>
//   }


// we used ternary oprator
    return  ListData.length === 0 ? <Shimmer/>:(
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
            console.log(seachText)
              const searchData =  ListData.filter((res)=>res?.data?.name?.includes(seachText))   
              console.log(searchData)

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
                    ListData.map((list) => (
                        <RestruentCart key={list.info.id} resdata={list} />
                    ))
                }
            </div>
        </>
    )
}

export default Body;