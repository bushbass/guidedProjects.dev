import { useContext } from 'react';
import CartContext from '../context/CartContext';
const { cart, setCart } = useContext(CartContext);

export function addToCart(id) {
  setCart([...cart, { id, qty: 1 }]);
}
