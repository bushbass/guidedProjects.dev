import { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import PropTypes from 'prop-types';
import Rating from './Rating';
import QuantityDropdown from './QuantityDropdown';
import { CardContainer, ImageDiv, CardStyled, OnSale } from '../styles';

export default function IndividualItemCard({ id }) {
  const { addItemToCart, cart } = useContext(CartContext);
  const [inPageCart, setInPageCart] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [available, setAvailable] = useState(0);
  const [pageItem, setPageItem] = useState({});

  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/${id}`)
      .then((res) => res.json())
      .then((item) => setPageItem(item));
  }, []);

  // useEffect(() => {
  //   const itemInCart = cart.filter((cartItem) => cartItem._id === item?._id)[0];
  //   // finds this page's item if it is in the cart
  //   // should probably use slice instead of filter, but works for now
  //   if (item) setAvailable(item.stockCount);
  //   if (itemInCart) {
  //     setAvailable(itemInCart?.stockCount - itemInCart?.qty);
  //     setInPageCart(itemInCart?.qty);
  //     if (available <= 1) setDisableButton(true);
  //   }
  // }, [cart]);

  return (
    <CardContainer>
      {pageItem ? (
        <>
          <ImageDiv>
            <img src={pageItem.imageUrl} alt={pageItem.name} />
          </ImageDiv>
          <CardStyled>
            <h3>{pageItem.name}</h3>
            <Rating height={'15px'} stars={pageItem.avgRating} />
            <p className="description">{pageItem.description}</p>
            <p className="price">${pageItem.price}</p>
            {pageItem.isOnSale && <OnSale>On sale</OnSale>}
            <p>Already in cart: {inPageCart}</p>
            <p>{available} in stock </p>

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
