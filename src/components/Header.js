export const Title = () => (
    <img
      className="logo"
      src="https://content3.jdmagicbox.com/comp/rohtak/j1/9999p1262.1262.230322230029.w5j1/catalogue/food-villa-family-restaurant-and-hotel-rohtak-restaurants-vepedpc3pq.jpg"
      alt=""
    />
  );

export const Header = () => {
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

  // export default Header;