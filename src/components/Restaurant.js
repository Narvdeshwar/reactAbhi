import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MANU_API_URL } from "../utils/constant"


const Restaurant = () => {

    const [restInfo, setrestInfo] = useState(null);

    const { resId } = useParams()
    console.log(resId)

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MANU_API_URL + resId.slice(2));
        const json = await data.json()

        setrestInfo(json)

    }

    if (restInfo === null)
        return <Shimmer />;


    const { name, costForTwoMessage, cuisines } = restInfo?.data?.cards[2]?.card?.card?.info;
    const check = restInfo?.data?.cards[2];
    console.log("checking", check)
    // const { itemCards } = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card;
    const { itemCards } = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
   

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{costForTwoMessage}</h3>
            <h2>{cuisines}</h2>
            <h1>Menu</h1>
            <ul>

                {itemCards?.map((items) => (
                    <li key={items.card?.info.id}>{items.card?.info.name} -  {"Rs  "}{items.card?.info.defaultPrice / 100 || items.card?.info.price / 100}</li>
                ))}

            </ul>
        </div>
    )
}
export default Restaurant
