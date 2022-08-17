import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [added, setAdded] = useState(props.added);

  useEffect(() => {
    setAdded(props.added);
  }, [props.added]);

  return (
    <div className="header" id="header">
      <h1>Shopping Cart</h1>
      <span>
        <Link to="/shopping-cart/" className="home-link">
          <img src="../img/icons/home.png" alt="" className="home-icon" />
          Home
        </Link>
      </span>
      <span>
        <Link to="/shopping-cart/shop" className="shop-link">
          <img src="../img/icons/cart.png" alt="" className="home-icon" />
          Shop
        </Link>
      </span>
      <span className="cartCounter">
        <Link to="/shopping-cart/cart" className="cart-link">
          <img src="../img/icons/cart.png" alt="" fill="red" />
        </Link>
        <span className="added-span">{added}</span>
      </span>
    </div>
  );
};

export default NavBar;
