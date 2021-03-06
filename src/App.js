import { useEffect, useState, useContext } from 'react';
import './styles.css';
import CartContext from './context/CartContext';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Item from './pages/Item';

export default function App() {
  useEffect(() => {
    fetch('https://gp-super-store-api.herokuapp.com/item/list')
      .then((res) => res.json())
      .then((data) => setitemList(data.items));
  }, []);
  const [itemList, setitemList] = useState([]);
  const [cart, setCart] = useState([]);

  function addItemToCart(itemId, qty) {
    const foundItem = cart.find((item) => itemId === item.id);
    console.log({ foundItem });
    // console.log({ index });
    if (foundItem !== 'undefined') {
      const index = cart.indexOf(foundItem);
      const cutItem = cart.splice(index, 1);
      console.log({ cutItem });
      const newQty = cutItem[0].qty + qty;
      console.log({ newQty });
    }
    setCart([...cart, { id: itemId, qty }]);
  }

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart, addItemToCart }}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/deals">
                <Deals itemList={itemList} />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/item/:id">
                <Item itemList={itemList} />
              </Route>
              <Route path="/">
                <Home itemList={itemList} />
              </Route>
            </Switch>
          </div>
        </Router>
      </CartContext.Provider>
    </div>
  );
}
