import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.recipes);
  };
  if(listOfRestaurants.length === 0){
    return <Shimmer/>
  }
  return (
    <div className="body">
      {" "}
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.rating > 4,
          );
          setListOfRestaurants(filteredList);
        }}
      >
        {" "}
        Top Rated Restaurant{" "}
      </button>{" "}
      <div className="res-container">
        {" "}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default Body;
