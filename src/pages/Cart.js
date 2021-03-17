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
  max-width: 500px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
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
      {console.log({ cart })}
      <div>
        <h2>cart component</h2>
      </div>
      <ProductRow className="productRow">
        <div className="pName">Product Name</div>
        <div className="qty">Quantity</div>
      </ProductRow>
      {cart.map((item) => (
        <ProductRow className="productRow" key={item._id}>
          <div className="pName">{item.name}</div>
          <div className="qty"> {item.qty}</div>
        </ProductRow>
      ))}
      <p>{cartTotal} total items in cart</p>
    </CartContainer>
  );
}
