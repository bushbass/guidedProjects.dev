import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <div>
        <h2>cart component</h2>
        {console.log(cart)}
      </div>
    </div>
  );
}
