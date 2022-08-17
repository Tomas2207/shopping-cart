import { Link } from 'react-router-dom';
import '../Home.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="background-img"></div>
      <div className="home-title">
        <span className="title-span">Shopping Cart</span>
        <span className="desc-span">
          {' '}
          Latest products in technology and more
        </span>
        <button className="home-btn">
          <Link to="/shopping-cart/shop" className="link-products">
            View Products
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
