import { useEffect, useState } from "react";
import "./styles.css";
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

  return (
    <div className="App">
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
    </div>
  );
}
