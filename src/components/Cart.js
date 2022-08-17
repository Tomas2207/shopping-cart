import { useEffect, useState } from 'react';
import '../Cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
  let total = 0;
  const [tot, setTot] = useState(total);
  const [purchased, setPurchased] = useState({
    loading: false,
    set: false,
  });

  const handleTotal = () => {
    setTot(total);
  };

  const handlePurchased = () => {
    setPurchased({
      loading: true,
      set: false,
    });

    setTimeout(() => {
      setPurchased({
        loading: true,
        set: true,
      });
    }, 1000);

    setTimeout(() => {
      setPurchased({
        loading: false,
        set: false,
      });
      props.emptyCart();
    }, 3000);
  };

  return (
    <div>
      <div>
        <h2>Cart:</h2>
      </div>
      <div className="c-names">
        <span>Item</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Subtotal</span>
      </div>
      <div className="cart-content">
        {props.cartArray.map((item) => {
          total += parseFloat(item.price) * parseInt(item.quantity);

          return (
            <div key={item.keys}>
              <CartItem
                item={item}
                deleteItem={props.deleteItem}
                handleTotal={handleTotal}
              />
            </div>
          );
        })}
        {total === 0 && (!purchased.loading || !purchased.set) && (
          <div className="no-items">No items on the cart :( </div>
        )}
        {total !== 0 && !purchased.loading && (
          <div className="total">
            <div>Total: ${total.toFixed(2)} </div>
            <div>
              <button className="purchase-btn" onClick={handlePurchased}>
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
        {purchased.loading && !purchased.set && (
          <div className="total">
            <button className="purchase-btn loading"></button>
          </div>
        )}
        {purchased.loading && purchased.set && (
          <div className="total">
            <button className="purchase-btn">
              Thank you for your purchase
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
