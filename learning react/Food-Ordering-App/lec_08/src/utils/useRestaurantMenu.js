import { useEffect, useState } from "react";
import { DATA_URL } from "../utils/constants";


const useRestaurantMenu = (resId) => {
    //fetch data 
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () =>{
        const data = await fetch(DATA_URL + resId);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;