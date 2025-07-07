
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatergory from "./RestaurantCatergory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";


const Restaurant = () => {

    const { resId } = useParams()

    const restInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex]= useState(null)

    if (restInfo === null)
        return <Shimmer />;

    const { name, costForTwoMessage, cuisines ,cloudinaryImageId} = restInfo?.data?.cards[2]?.card?.card?.info;

   

    const { itemCards } = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;



 const catergores = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center">
        <div className=" text-center">
            <h1 className="font-bold fon my-2 p-2">{name}</h1>
           <h1 className="font-semibold " > {cuisines.join(",")} - {costForTwoMessage} </h1>

           {catergores.map((catergory,index)=>(
            <RestaurantCatergory key={catergory.card?.card.title}
             data= {catergory.card?.card}
             showItem ={index === showIndex ? true:false}
             setShowIndex={()=> setShowIndex(index)}
             />
           ))}
        </div>
        </div>
    )
}
export default Restaurant
