import React, { useState } from "react";

// const authenticatedUser=()=>{
//   // suppose we are making an api call to check it authenticated 
//   return true;
// }

export const Title = () => (
    <img
      className="logo"
      src="https://content3.jdmagicbox.com/comp/rohtak/j1/9999p1262.1262.230322230029.w5j1/catalogue/food-villa-family-restaurant-and-hotel-rohtak-restaurants-vepedpc3pq.jpg"
      alt=""
    />
  );

export const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
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
        {
          // inside react you cant just run javascript statements 
          // for example 
          // var a=10;
          // console.log(a);
          // above this will not work
          
          // But jut by making it an expression it will work
          // ((var a=10),console.log(a))
          // At the end of the day we can run any js inside react but not statement just expression
        }

        {isLoggedIn?(<button onClick={()=>setIsLoggedIn(false)}>logout</button>):(<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
        {/* <button>Login</button>
        <button>logout</button> */}
      </div>
    );
  };

  // export default Header;