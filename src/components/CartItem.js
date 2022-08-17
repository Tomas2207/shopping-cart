import { useState } from 'react';
import items from './ItemArray';

const CartItem = (props) => {
  const [quan, setQuan] = useState(props.item.quantity);

  const [total, setTotal] = useState(props.item.price * props.item.quantity);

  const handleChange = (event, index) => {
    items[index].quantity = event.target.value;
    console.log(items[index]);
    setQuan(items[index].quantity);
    console.log(items[index]);
    setTotal(items[index].price * items[index].quantity);
    console.log(props.item.name);
  };

  return (
    <div className="c-item">
      <div className="itemContainer" key={props.item.keys}>
        <div
          className="cart-image"
          style={{
            backgroundImage: 'url(' + props.item.photo + ')',
          }}
        >
          {/* <img src={props.item.photo} alt="" className="cImg" /> */}
        </div>
        <div className="cart-description">
          {/* {item.name} x {item.quantity} */}x{' '}
          <input
            type="number"
            name="quant"
            id="quant"
            min={1}
            max={10}
            value={quan}
            onChange={(e) => {
              handleChange(e, props.item.index);
              props.handleTotal();
            }}
          />
        </div>
        <div className="cart-price">${props.item.price}</div>
        <div className="cart-price">${total.toFixed(2)}</div>
        <button
          className="delete-btn"
          onClick={() => props.deleteItem(props.item.index)}
        >
          <img src="img/icons/trash.png" alt="" className="delete-img" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
