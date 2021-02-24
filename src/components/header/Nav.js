import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/deals">
        Deals
      </NavLink>
      <NavLink activeClassName="active" to="/cart">
        Cart
      </NavLink>
    </nav>
  );
}
