import { useContext } from 'react';
import CartContext from '../context/CartContext';
const { cart, setCart } = useContext(CartContext);

export function addItemToCart(itemId, qty) {
  setCart([...cart, { id: itemId, qty }]);
}
