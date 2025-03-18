import {URI_IMG_BASE} from "../constant";

export const RestaurentCard = ({name , cuisines ,avgRatingString,cloudinaryImageId}) => {
  // const =restaurant.info;
  return (
    <div className="card">
      <img
        src={
            URI_IMG_BASE +
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

