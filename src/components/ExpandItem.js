import { useState } from 'react';
import '../Expand.css';

const ExpandItem = (props) => {
  const [added, setAdded] = useState();
  const handleBtn = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className="expand-parent">
      <div className="expand-container">
        <div className="expand-x" onClick={props.closeExpand}>
          X
        </div>
        <div
          className="expand-img"
          style={{
            backgroundImage: 'url(' + props.array.img + ')',
          }}
        ></div>
        <div className="expand-info">
          <h3 className="expand-h3">{props.array.name}</h3>
          <div className="expand-price">${props.array.price}</div>
          <div className="shipping-expand">Free Shipping</div>
          <button
            className="expand-btn"
            onClick={() => {
              props.handleAddCart(props.array.index);
              handleBtn();
            }}
          >
            Add to Cart
          </button>
          {added && <div className="expand-btn2">Added!</div>}
          <div>
            <ul>
              {props.array.desc.map((item, idx) => {
                return <li key={idx}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandItem;
