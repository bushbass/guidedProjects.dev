import { useContext } from 'react';
import CartContext from '../context/CartContext';
export default function Cart() {
  const { cart, setCart, addItemToCart, combinedCart } = useContext(CartContext);

  return (
    <div className="cart">
      <div>
        <h2>cart component</h2>
        {console.log({ cart })}
      </div>
      {cart.map((item) => (
        <>
          <p>{item.id}</p>
          <p>{item.qty}</p>
        </>
      ))}
      {console.log({combinedCart})}
      <p>{cart.length} items in cart</p>
      <button onClick={() => addItemToCart(7, 7)}>add</button>
    </div>
  );
}
