import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './Rating';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    background: orange;
    border: none;
    padding: 7px;
    width: 200px;
    border-radius: 5px;
    color: white;
  }
`;
const ImageDiv = styled.div`
  img {
    max-width: 350px;
    margin: 25px;
  }
  @media (max-width: 768px) {
    max-width: 350px;
    margin: 25px;
  }
`;
const CardStyled = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 300px;
  .description {
    border-top: 1px solid gray;
    width: 100%;
    padding-top: 15px;
  }
  p {
    text-align: left;
  }
  .price {
    font-weight: bold;
  }
  button {
    background: orange;
    border: none;
    padding: 7px;
    width: 200px;
    border-radius: 5px;
    color: white;
  }
`;
const OnSale = styled.div`
  background: red;

  color: white;
  width: 30%;
  padding: 7px;
  border-radius: 7px;
`;

export default function IndividualItemCard({ item }) {
  const { cart, setCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(0);

  function decrement() {
    if (inCart === 0) {
      setInCart(0);
    } else {
      setInCart(inCart - 1);
    }
  }

  function increment() {
    if (inCart === item.stockCount) {
      alert('Error: There is not enough stock to add any more of this item');
    } else {
      setInCart(inCart + 1);
    }
  }
  function addToCart(itemId) {
    var result = cart.find((obj) => {
      return obj.id === itemId;
    });
    console.log({ result });
    if (result === undefined) {
      setCart([...cart, { id: itemId, qty: 1 }]);
    }
  }

  return (
    <CardContainer>
      {console.log(item)}
      {item ? (
        <>
          <ImageDiv>
            <img src={item.imageUrl} alt={item.name} />
          </ImageDiv>
          <CardStyled>
            <h3>{item.name}</h3>
            <Rating height={'15px'} stars={item.avgRating} />
            <p className="description">{item.description}</p>
            <p className="price">${item.price}</p>
            {item.isOnSale && <OnSale>On sale</OnSale>}
            <p>
              Quantity:
              <span
                onClick={increment}
                style={{
                  background: '#cfd7ff',
                  marginLeft: '20px',
                  display: 'inline-block',
                  width: '20px',
                  textAlign: 'center',
                  padding: '5px',
                }}
              >
                +
              </span>
              <span
                style={{
                  background: '#cfd7ff',
                  margin: '0px 20px',
                  display: 'inline-block',
                  width: '50px',
                  textAlign: 'center',
                  padding: '10px',
                }}
              >
                {inCart}
              </span>
              <span
                onClick={decrement}
                style={{
                  background: '#cfd7ff',

                  display: 'inline-block',
                  width: '20px',
                  textAlign: 'center',
                  padding: '5px',
                }}
              >
                -
              </span>
              <span onClick={() => setInCart(0)}>remove</span>
            </p>
            <p>{item.stockCount} in stock </p>

            <button onClick={(itemId) => addToCart(item._id)}>
              Add to Cart
            </button>
          </CardStyled>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </CardContainer>
  );
}
IndividualItemCard.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    avgrating: PropTypes.number,
    isOnSale: PropTypes.bool,
    description: PropTypes.string,
    _id: PropTypes.string,
  }),
};
