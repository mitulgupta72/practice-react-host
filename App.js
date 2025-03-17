/*
bundler : PARCEL
it does a lot of things like:
* created a server 
* HMR - hot module Replacement 
* File watcher alorithms - in c++
* BUNDLING 
* MINIFYING 
* Cleaning our code 
* Dev and production build
* super fast build algorithm
* image optimizations
* Caching while development 
* Compression 
* Compatible with older verison of browser 
* HTTPS od devlopment environment
* port Number 
* Consistent hashing algorithm
* Zero Config 
* Treee shaking - Removing unwanted 
*
*
* Transitivs dependencies 

*/




import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     {
//       // here you pass props
//       id: "title",
//       key: "h1"
//     },
//     "Namaste From React!!"
//   );       
//   const heading2 = React.createElement(
//     "h2",
//     {
//       // here you pass props
//       id: "title",
//       hello:"world",
//       key:"h2"   // these are all props ie properties and that can be anything in react not just limited to id or class 
//     },
//     "heading @ 2 : Namaste From React!!"
//   );

//   const contianer = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading2]
//   );

// instead of writing React.create element again and again we will be using jsx 
// jsx is converted to normal js by babel which then execued similarly but its better and easier to use as developer
// keys are important when there are siblings
// this is a react element 
const heading=(
  <h1 id="title" key="h1">
    this is heading using jsx
  </h1>
);

// a functional component 
const Title=()=>(
  <h1 id="title1" key="title">
    this is heading using jsx component test........
  </h1>
);

// here is a react functional  component 

const HeaderComponent=()=>{
  return (

    <div>
    {/*inside {} you can write any java script in jsx  */}
      {heading}

      {/* and for integrating functiona components  OR  */}
      {/* for component composition we can do like */}
      {/* we also call it COMPONENT COMPOSITION */}
      <Title/>
      {/* this is a normal java script function so you can also call it like a normala js function also
       */}
       {Title()}
      <h1>namste from funcitonal component       </h1>
      <h2> h2 in functional component</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
  
// this way when you wanna render and react element not component 
// root.render(heading);
// for rendering react component
root.render(<HeaderComponent/>)
  // console.log(heading);