import "./styles.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Item from "./pages/Item";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/deals">
              <Deals />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/item/:id">
              <Item />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
