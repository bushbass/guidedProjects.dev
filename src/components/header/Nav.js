import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
const Button = styled.button`
  border: none;
  background: orange;
  font-size: 1.2rem;
  padding: 7px;
`;
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
      <Link to="/">
        <Button>Sign In</Button>
      </Link>
    </nav>
  );
}
