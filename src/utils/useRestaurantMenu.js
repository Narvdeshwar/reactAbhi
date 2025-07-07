import { useEffect, useState } from "react"
import { MANU_API_URL } from "./constant";

const useRestaurantMenu = (resId)=>{
    
    const [restInfo,setrestInfo]= useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MANU_API_URL + resId.slice(2));
        const json = await data.json()
        setrestInfo(json)

    }

    return restInfo
}
export default useRestaurantMenu