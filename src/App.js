import "./styles.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Deals from "./components/Deals";

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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
