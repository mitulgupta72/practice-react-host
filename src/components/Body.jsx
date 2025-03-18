import { RestaurentCard } from "./RestaurantCard";
import { restaurants } from "../constant";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";

const Body = () => {
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
