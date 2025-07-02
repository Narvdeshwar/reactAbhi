import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const Restaurant = () => {

    const { resId } = useParams()

    const restInfo = useRestaurantMenu(resId);

    if (restInfo === null)
        return <Shimmer />;

    const { name, costForTwoMessage, cuisines } = restInfo?.data?.cards[2]?.card?.card?.info;
    const check = restInfo?.data?.cards[2];
    console.log("checking", check)

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
