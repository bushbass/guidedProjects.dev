import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  a {
    color: black;
  }
  .tableHeader {
    font-weight: bold;
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
        <div className="pName tableHeader">Product Name</div>
        <div className="qty tableHeader">Quantity</div>
      </ProductRow>
      {cart.map((item) => (
        <ProductRow className="productRow" key={item._id}>
          <div className="pName">
            <Link to={`/item/${item._id}`}>{item.name} </Link>
          </div>
          <div className="qty"> {item.qty}</div>
        </ProductRow>
      ))}
      <p>{cartTotal} total items in cart</p>
    </CartContainer>
  );
}
