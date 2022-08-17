import { useState } from 'react';
import './App.css';
import ExpandItem from './components/ExpandItem';

import ItemCard from './components/ItemCard';

const App = (props) => {
  const [itemArray, setItemArray] = useState('');
  const [expand, setExpand] = useState(false);

  const handleExpand = (name, img, price, index, desc) => {
    setItemArray({
      name: name,
      img: img,
      price: price,
      index: index,
      desc: desc,
    });
    setExpand(true);
    window.scrollTo(0, 0);
  };

  const closeExpand = () => {
    setExpand(false);
  };

  return (
    <div className="app-container">
      {/* <h2>All items</h2> */}
      <div className="showItems">
        {props.array.map((item) => {
          return (
            <ItemCard
              name={item.name}
              price={item.price}
              photo={item.photo}
              key={item.keys}
              index={item.index}
              added={item.added}
              desc={item.desc}
              handleAddCart={props.handleAddCart}
              deleteItem={props.deleteItem}
              expand={handleExpand}
            />
          );
        })}
      </div>
      {expand && (
        <ExpandItem
          array={itemArray}
          handleAddCart={props.handleAddCart}
          closeExpand={closeExpand}
        />
      )}
    </div>
  );
};

export default App;
