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
  const [combinedCart, setCombinedCart] = useState({})

  function addItemToCart(itemId, qty) {
    setCart([...cart, { id: itemId, qty }]);
  }
useEffect(() => {
  const tempCombinedCart = {}
  
    cart.forEach(item => {
      if (!tempCombinedCart.hasOwnProperty(item.id)) {
        tempCombinedCart[item.id] = item.qty
      }
      else {
        tempCombinedCart[item.id] = tempCombinedCart[item.id] + item.qty
      }
    })
  setCombinedCart(tempCombinedCart)
}, [cart])
  

  return (
    <div className="App">
      <CartContext.Provider value={{ cart,combinedCart, setCart, addItemToCart, itemList }}>
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
