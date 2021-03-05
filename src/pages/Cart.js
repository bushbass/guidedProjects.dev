import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart">
      <div>
        <h2>cart component</h2>

        {console.log('cart is array ?', Array.isArray(cart))}
        {console.log('type of cart', typeof cart)}
        {console.log({ cart })}
      </div>
      {cart.map((item) => (
        <>
          <p>{item.id}</p>
          <p>{item.qty}</p>
        </>
      ))}
      <p>{cart.length} items in cart</p>
    </div>
  );
}
