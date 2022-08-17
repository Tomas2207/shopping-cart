import { useState } from 'react';
import items from './ItemArray';

const ItemCard = (props) => {
  const [added, setAdded] = useState(items[props.index].added);

  const handleClick = (index) => {
    items[index].added = !added;
    setAdded(items[index].added);
  };

  return (
    <div
      onClick={() => {
        props.expand(
          props.name,
          props.photo,
          props.price,
          props.index,
          props.desc
        );
      }}
    >
      <div className="ItemCard" key={props.keys}>
        <div
          className="image"
          style={{
            backgroundImage: 'url(' + props.photo + ')',
          }}
        >
          {/* <img src={props.photo} alt="" className="main-img" /> */}
        </div>
        <div className="itemName">
          <span>{props.name}</span>
        </div>
        <div className="itemPrice">${props.price}</div>
        <div className="shipping">Free Shipping</div>
      </div>
    </div>
  );
};

export default ItemCard;
