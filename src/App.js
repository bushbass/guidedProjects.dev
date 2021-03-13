import { useEffect, useState } from "react";
import "./styles.css";
import CartContext from "./context/CartContext";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Item from "./pages/Item";

export default function App() {
  useEffect(() => {
    fetch("https://gp-super-store-api.herokuapp.com/item/list")
      .then((res) => res.json())
      .then((data) => setitemList(data.items));
  }, []);
  const [itemList, setitemList] = useState([]);
  const [cart, setCart] = useState([
    { id: "5fbfff7d58aa65167efb52b9", productName: "Bag Pipes", qty: 1 }
  ]);

  function addItemToCart(newItem) {
    console.log("new item", newItem);
    console.log("cart", cart);
    //empty cart, cart does not have item, cart has item
    if (cart.length === 0) {
      setCart([...cart, newItem]);
      console.log("empty cart", Array.isArray(cart));
    }
  }

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart, addItemToCart, itemList }}>
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
