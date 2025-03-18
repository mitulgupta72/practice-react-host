import { RestaurentCard } from "./RestaurantCard";
import { restaurants } from "../constant";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";

const Body = () => {
  // if we use normal variables here like js and it changes react will not be able to tract it that it chnaged and render the changed vlaue of var in ui but if we use state var useState react can detect if its changed so it will also render it in ui
  // like we use normal variables in js in react we use state variables for two way binding
  const [serchText, setSerchText] = useState("");
  const [restaurantData, setRestaurantData] = useState(restaurants);

  function filterData(reataurantData, searchText) {
    const filterData = reataurantData.filter((restaurant) =>
      restaurant.info.name.includes(searchText)
    );
    return filterData;
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurent"
          value={serchText}
          onChange={(e) => {
            setSerchText(e.target.value);
          }}
        />
        <button
          className="Search-btn"
          onClick={() => {
            const data = filterData(restaurantData, serchText);
            setRestaurantData(data);
          }}
        >
          search now
        </button>
      </div>
      <div className="restaurent-list">
        {restaurantData.map((restaurantt) => {
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
