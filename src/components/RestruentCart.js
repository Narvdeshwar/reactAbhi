import { CDN_URL } from "../utils/constant";

const RestruentCart = (props) => {  //both are same thing 
    const { resdata } = props;

    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = resdata.info;
   

    return (
        <div className="main-grid">
            <div className="list-food">
                <img className="image-food-list"
                    src={CDN_URL + cloudinaryImageId} />
                <div className="container">
                    <h3>{name}</h3>
                    <h4>{cuisines}</h4>
                    <h4>{avgRating} stars</h4>
                    <h4>{sla.deliveryTime}minutes</h4>

                </div>

            </div>

        </div>
    )
}
export default RestruentCart;

