import RestruentCart from "./RestruentCart";
import ListData from "../utils/mockdata";
import { useState } from "react";
import relist from './../utils/mockdata';

const Body = () => {
    const [ListData,setListdata] = useState(relist)
    // console.log(ListData)
    return (
        <>
            <div className="body-main">
                <div className="filter"> <input placeholder="search" />
                    <button className="filter-btn"
                        onClick={() =>{
                            const filteredList = ListData.filter(
                                (res) => res.info.avgRating > 4);
                            
                        setListdata(filteredList)
                        }}>Top Rated Restruent</button></div>
            </div>
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