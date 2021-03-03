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
  const [cart, setCart] = useState([{ product: 'fake initial product' }]);
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
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
