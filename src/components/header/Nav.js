import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import styled from 'styled-components';

const CartTotal = styled.span`
  font-size: 1rem;
  background: yellow;
  color: black;
  padding: 5px;
  border-radius: 50%;
`;

const SignInButton = styled.button`
  border: none;
  border: 1px solid black;
  background: orange;
  font-size: 1.2rem;  border-radius: 5px;
  padding: 7px;
`;
export default function Nav() {
  const { cartTotal } = useContext(CartContext);
  return (
    <nav>
      <NavLink activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/deals">
        Deals
      </NavLink>
      <NavLink activeClassName="active" to="/cart">
        Cart {cartTotal ? <CartTotal>{cartTotal}</CartTotal> : null}
      </NavLink>
      <Link to="/">
        <SignInButton>Sign In</SignInButton>
      </Link>
    </nav>
  );
}
