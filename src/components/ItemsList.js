import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items}) => {

    const dispatch = useDispatch();

   const handleAddItem = (item)=>{
    // dispatch an action
    dispatch(addItem(item))
   }
    
    return (
     <div>
        {items.map((item)=>(
          
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
             
                <div className="w-9/12 ">
                <div className="py-2 ">
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price ?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                   <div className="w-3/12 p-4">
                   <div className="absolute bg-white rounded-2xl h-auto"> 
                    <button className="p-2 bg-red shadow-lg m-auto hover:bg-sky-200 "
                    // onClick={handleAddItem}
                    onClick={() => handleAddItem(item)}
                    // onClick={handleAddItem(item)}

                    //difference between
                    
                    >Add +</button>
                   </div>
                <img  className="w-full" src={CDN_URL + item.card.info.imageId }/> </div>
          </div>
        
       ) )}
         </div>
      
     
    );
}
export default ItemsList