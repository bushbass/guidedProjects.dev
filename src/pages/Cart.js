import { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../context/CartContext';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .productRow:nth-child(odd) {
    background: #e0e6ff;
  }
`;
const ProductRow = styled.div`
  display: grid;
  max-width: 750px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid grey;
  padding: 15px;
  .pName {
    place-self: start;
  }
  .qty {
    place-self: end;
  }
`;

export default function Cart() {
  const { cart, cartTotal } = useContext(CartContext);

  return (
    <CartContainer className="cart">
      <div>
        <h2>cart component</h2>
      </div>
      {cart.map((item) => (
        <ProductRow className="productRow" key={item.id}>
          <div className="pName">Product Name: {item.productName}</div>
          <div className="qtyName">Quantity:</div>
          <div className="qty"> {item.qty}</div>
        </ProductRow>
      ))}
      <p>{cartTotal} total items in cart</p>
    </CartContainer>
  );
}
