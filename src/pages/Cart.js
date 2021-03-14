import { useContext } from "react";
import CartContext from "../context/CartContext";
export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <div>
        <h2>cart component</h2>
        {console.log({ cart })}
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>Product Name: {item.productName}</p>
          <p>Quantity: {item.qty}</p>
        </div>
      ))}
      <p>{cart.length} items in cart</p>
    </div>
  );
}
