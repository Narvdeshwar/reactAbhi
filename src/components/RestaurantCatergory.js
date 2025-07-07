import { useState } from "react"
import ItemsList from "./ItemsList"

const RestaurantCatergory = ({ data ,showItem,setShowIndex}) => {
    
    const handleClick =()=>{
   setShowIndex()
    }
    
    return (
        <>
            <div>
                {/* header */}
                <div className="w-6/12 mx-auto my-4 bg-gray-300 p-4 shadow-lg " >
                    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                        <span>⬇️</span>
                      
                    </div>
                    {  showItem && <ItemsList items={data.itemCards} />}
                </div>
                {/* Accordion Body */}


            </div>

        </>
    )
}
export default RestaurantCatergory