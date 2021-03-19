import { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './Rating';
import QuantityDropdown from './QuantityDropdown';

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
  button:active {
    transform: translate(1px, 1px);
    transition: 0.1s;
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
  const { addItemToCart, cart } = useContext(CartContext);
  const [inPageCart, setInPageCart] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [available, setAvailable] = useState(0);

  useEffect(() => {
    const itemInCart = cart.filter((cartItem) => cartItem._id === item?._id)[0];
    // itemInCart should probably use slice instead of filter, works for now
    console.log('item in cart', itemInCart, 'props.item', item);
    if (item) setAvailable(item.stockCount);
    if (itemInCart) {
      setAvailable(itemInCart?.stockCount - itemInCart?.qty);
      setInPageCart(itemInCart?.qty);
      if (available <= 1) setDisableButton(true);
    }
  }, [cart, item]);

  return (
    <CardContainer>
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
            <p>Already in cart: {inPageCart}</p>
            <p>{available} in stock </p>
            {console.log(typeof available)}
            <QuantityDropdown inStockValue={available} />
            <button
              disabled={disableButton}
              onClick={() =>
                addItemToCart({
                  ...item,
                  qty: 1,
                })
              }
            >
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
