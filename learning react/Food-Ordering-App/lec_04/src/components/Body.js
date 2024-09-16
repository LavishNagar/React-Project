import RestaurantCart from "./RestaurantCart";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () =>{
  // Local State Variable - Super Powerful variable
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
    }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();

    const restaurantItems = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    

    console.log(json);
    // optional chaining 
    setlistOfRestaurant( restaurantItems);
  };
  
  // Conditional Rendering 
  if (listOfRestaurants.length === 0){
    return <h1>Loading.....</h1>
  }

  return (
    <div className="Body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() =>{
          // filter logic here 
        const filtered = listOfRestaurants.filter(
          (res)=> res.info.avgRating > 4
      );
        setlistOfRestaurant(filtered)
        }}
        >
          Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCart key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

  export default Body



