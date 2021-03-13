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
        <>
          {console.log({ item })}
          {/* <p>Item number: {item}</p>
          <p>Quantity: {item}</p> */}
        </>
      ))}
      <p>{cart.length} items in cart</p>
    </div>
  );
}
