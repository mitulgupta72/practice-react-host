import { RestaurentCard } from "./RestaurantCard";
import { restaurants } from "../constant";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(reataurantData, searchText) {
  const filterData = reataurantData.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // REACT COMPONENT REREDERS ONLY IF THE STATE VAR IABLE CHANGES OR PROPS CHANGES
  // if we use normal variables here like js and it changes react will not be able to tract it that it chnaged and render the changed vlaue of var in ui but if we use state var useState react can detect if its changed so it will also render it in ui
  // like we use normal variables in js in react we use state variables for two way binding
  // useState is a hook which returns an array of two values first is the state variable and second is the function to update the state variable
  const [searchText, setSerchText] = useState("");

  //when we have given nothing in intial default value shimmer will be shown until data is fetched from api 
  const [allRestaurantData, setAllRestaurantData] = useState([]);        
  const [filteredRestaurantData, setFilteredRestaurantData] =
    useState(restaurants);

  //  takes a call backe function and a array of dependencies()
  // if dependency array not provided it will run on every render
  // if empty array provided it will run only once after render
  // if any value provided it will run (first after initial render + when that value changes)
  useEffect(() => {
    // best place to make API calls because it will run only once after render
    getRestaurants();
    console.log("useEffect called");
  }, []);
  console.log("rendered");
  async function getRestaurants() {
    const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7208934&lng=75.85139819999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"    );
    const json = await data.json();
    console.log(json);
    setAllRestaurantData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // early return if data is not available
  // saves us from error of data not available
  // but due to this shimmer won't load but its loading now because we have passed and ampty array in defaut value
  if (!allRestaurantData) {
    return null;
  }

  // if (!filteredRestaurantData) {
  if (filteredRestaurantData?.length === 0) {
    return <h1>no restaurants availabe </h1>;
  }

  return allRestaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurent"
          value={searchText}
          onChange={(e) => {
            setSerchText(e.target.value);
          }}
        />
        <button
          className="Search-btn"
          onClick={() => {
            const data = filterData(allRestaurantData, searchText);
            setFilteredRestaurantData(data);
          }}
        >
          search now
        </button>
      </div>
      <div className="restaurent-list">
        {filteredRestaurantData.map((restaurantt) => {
          return (
            <RestaurentCard key={restaurantt.info.id} {...restaurantt.info} />
          );
        })}

        {/* <RestaurentCard {...restaurants[0].info} />
      <RestaurentCard {...restaurants[1].info} />
      <RestaurentCard {...restaurants[2].info} />
      <RestaurentCard {...restaurants[3].info} />
      <RestaurentCard {...restaurants[4].info} /> */}
      </div>
    </>
  );
};

export default Body;
