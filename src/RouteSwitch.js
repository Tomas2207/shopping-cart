import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import App from './App';
import Cart from './components/Cart';
import { useState } from 'react';
import items from './components/ItemArray';
import HomePage from './components/HomePage';
import ExpandItem from './components/ExpandItem';

const RouteSwitch = () => {
  const [array, setArray] = useState(items);
  const [cartNumber, setCartNumber] = useState(0);
  const [cartArray, setCartArray] = useState([]);

  const handleAddCart = (num) => {
    let found = false;
    console.log(num);
    if (cartArray.length === 0) {
      setCartArray(cartArray.concat(array[num]));
      setCartNumber(cartNumber + 1);
    } else {
      for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].index === num) {
          cartArray[i].quantity++;
          found = true;
          break;
        }
      }
    }

    if (found === false) {
      setCartArray(cartArray.concat(array[num]));
      setCartNumber(cartNumber + 1);
    }
  };

  const deleteItem = (num) => {
    let cArray = [...cartArray];
    console.log(num);
    const index = cArray.findIndex((obj) => {
      return obj.index === num;
    });
    setCartNumber(cartNumber - 1);
    cArray[index].quantity -= cArray[index].quantity - 1;
    items[num].added = false;
    console.log('this:', cArray[index]);
    cArray.splice(index, 1);
    setCartArray(cArray);
  };

  const emptyCart = () => {
    setCartArray([]);
    setCartNumber(0);
  };

  return (
    <div className="main-div">
      <BrowserRouter>
        <NavBar added={cartNumber} />
        <Routes>
          <Route exact path="/shopping-cart/" element={<HomePage />} />
          <Route
            path="/shopping-cart/shop"
            element={
              <App
                array={array}
                handleAddCart={handleAddCart}
                deleteItem={deleteItem}
              />
            }
          />
          <Route
            path="/shopping-cart/cart"
            element={
              <Cart
                cartArray={cartArray}
                deleteItem={deleteItem}
                emptyCart={emptyCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
