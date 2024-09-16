import RestaurantCart from "./RestaurantCart";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
  // Local State Variable - Super Powerful variable
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // (useState) Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
    }, []);
    

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  
    );
  
    const json = await data.json();
    console.log(json);

    setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    

    // optional chaining 
    // setlistOfRestaurant(listOfRestaurants);
  };

  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={ () => {
            // Filter the restaurant cards and update the UI 
            // SearchText
            // console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText)
              );

              setfilterRestaurant(filteredRestaurant);
          }}>Search </button>
        </div>
        <button className="filter-btn" 
        onClick={() =>{
          // filter logic here 
        const filtered = filterRestaurant.filter(
          (res)=> res.info.avgRating > 4
      );
        setfilterRestaurant(filtered)
        }}
        >
          Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <Link 
           key={restaurant.info.id} 
           to={"/restaurants/"+ restaurant.info.id}><RestaurantCart  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

  export default Body






