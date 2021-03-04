import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart">
      <div>
        <h2>cart component</h2>
        {console.log(typeof setCart)}
        {console.log('cart is array ?', Array.isArray(cart))}
        {console.log('type of cart', typeof cart)}
        {console.log({ cart })}
      </div>
      <button onClick={() => setCart([...cart, { id: 4, qty: 5 }])}>
        Add dumb item
      </button>
    </div>
  );
}
