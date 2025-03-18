import React from "react";
import ReactDOM from "react-dom/client";

// {
// header
//   - logo
//   - Nav Items (Right Side)
//   - Cart
// Body
//     - Search bar
//     - RestaurentList
//       - RestaurentCard
//         - Image
//         - Name
//         - Rating
//         - Cusines
// Footer
//   - Links
//   - Copyright
// }

const Title = () => (
  <img
    className="logo"
    src="https://content3.jdmagicbox.com/comp/rohtak/j1/9999p1262.1262.230322230029.w5j1/catalogue/food-villa-family-restaurant-and-hotel-rohtak-restaurants-vepedpc3pq.jpg"
    alt=""
  />
);

// here is a react functional  component

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items ">
        <ul>
          <li>Home</li>
          <br />
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

// config driven ui
const burgerKing = {
  name: "BurgerKing ",
  image:
    "https://content.jdmagicbox.com/comp/jabalpur/p6/9999px761.x761.190824215336.h5p6/catalogue/burger-king-napier-town-jabalpur-jabalpur-fast-food-0xjmc4gzzp.jpg",
  cuisines: ["Burger", "American"],
  rating: "4.2",
};

const restaurants = [
  {
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.3",
      totalRatingsString: "976",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 10.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "10.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-18 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1f3ff740-18cf-4a74-85df-4ee8d4ef230b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "658210",
      name: "The Fusion Lounge",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Triloki nagar",
      areaName: "Railway Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "395453",
      avgRatingString: "4.2",
      totalRatingsString: "326",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 10,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-18 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1f3ff740-18cf-4a74-85df-4ee8d4ef230b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "40363",
      avgRatingString: "4.4",
      totalRatingsString: "259",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 11.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-18 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1f3ff740-18cf-4a74-85df-4ee8d4ef230b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      locality: "Sinchai Colony",
      areaName: "Satkar Chowk",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Indian",
        "Salads",
        "Desserts",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "21553",
      avgRatingString: "4.4",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 11.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-18 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1f3ff740-18cf-4a74-85df-4ee8d4ef230b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.7,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.7",
      totalRatingsString: "301",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-18 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1f3ff740-18cf-4a74-85df-4ee8d4ef230b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151515",
      name: "Gupta Bhojnalay",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "fulwara chowk",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Indian", "Beverages"],
      avgRating: 4,
      veg: true,
      parentId: "91635",
      avgRatingString: "4.0",
      totalRatingsString: "447",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 10.8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "10.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-18 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1f3ff740-18cf-4a74-85df-4ee8d4ef230b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
      type: "WEBLINK",
    },
  },
];
const RestaurentCard = ({name , cuisines ,avgRatingString,cloudinaryImageId}) => {
  // const =restaurant.info;
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="retaurent logo "
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurent-list">
      {
      restaurants.map((restaurantt) => {
        return <RestaurentCard {...restaurantt.info} />;
      })
      }

      {/* <RestaurentCard {...restaurants[0].info} />
      <RestaurentCard {...restaurants[1].info} />
      <RestaurentCard {...restaurants[2].info} />
      <RestaurentCard {...restaurants[3].info} />
      <RestaurentCard {...restaurants[4].info} /> */}
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// this way when you wanna render and react element not component
// root.render(heading);
// for rendering react component
root.render(<AppLayout />);
// console.log(heading);
