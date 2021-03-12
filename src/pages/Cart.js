import { useContext } from 'react';
import CartContext from '../context/CartContext';
export default function Cart() {
  const { cart, setCart, addItemToCart, combinedCart, itemList } = useContext(CartContext);

const entries = Object.entries(combinedCart)


  return (
    <div className="cart">
      <div>
        <h2>cart component</h2>
        {console.log({ cart })}
        {console.log({combinedCart})}
        {console.log({entries})}
      </div>
      {entries.map((item) => (
        <>
        {console.log({item})}
          <p>Item number: {item[0]}</p>
          <p>Quantity: {item[1]}</p>
        </>
      ))}
      <p>{cart.length} items in cart</p>
    </div>
  );
}
