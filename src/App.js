import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Title } from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { restaurants } from "./constant";
import { RestaurentCard } from "./components/RestaurantCard";

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

// here is a react functional  component

const AppLayout = () => {
  return (
    <>
      <Header></Header>
      {/* <XYZ.Header></XYZ.Header> */}
      {/* <Title></Title> */}
      {/* {console.log(restaurants)} */}
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
