import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../context/CartContext";

const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default function Cart() {
  const { cart, cartTotal } = useContext(CartContext);

  return (
    <div className="cart">
      <div>
        <h2>cart component</h2>
        {console.log({ cart })}
      </div>
      {cart.map((item) => (
        <ProductRow key={item.id}>
          <div className="pName">Product Name: {item.productName}</div>
          <div className="qtyName">Quantity:</div>
          <div className="qty"> {item.qty}</div>
        </ProductRow>
      ))}
      <p>{cartTotal} total items in cart</p>
    </div>
  );
}
