import { CDN_URL } from "../utils/constant";

import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestruentCart = (props) => {  //both are same thing 

    const {loggedInUser} = useContext(UserContext)
    const { resdata } = props;

    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = resdata.info;
   

    return (
        <div className="p-4 m-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400 flex-1 ">
            <div className="list-food">
                <img className="rounded-lg"
                    src={CDN_URL + cloudinaryImageId} />
                <div className="overflow-hidden text-ellipsis">
                    <h3 className="font-bold py-3 text-lg">{name}</h3>
                    <h4>{cuisines}</h4>
                    <h4>{avgRating} stars</h4>
                    <h4>{sla.deliveryTime}minutes</h4>
                    <h1>{loggedInUser}</h1>

                </div>

            </div>

        </div>
    )
}
export default RestruentCart;

