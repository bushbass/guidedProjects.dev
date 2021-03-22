import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import QuantityDropdown from './QuantityDropdown';
import { CardContainer, ImageDiv, CardStyled, OnSale } from '../styles';

export default function IndividualItemCard({ id }) {
  const [inPageCart, setInPageCart] = useState(0);
  const [pageItem, setPageItem] = useState({});

  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/${id}`)
      .then((res) => res.json())
      .then((item) => setPageItem(item));
  }, []);

  return (
    <CardContainer>
      {pageItem ? (
        <>
          {/* {console.log('page item', pageItem)} */}
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
            <p>{pageItem.stockCount} in stock </p>

            <QuantityDropdown
              inStockValue={pageItem.stockCount}
              pageItem={pageItem}
            />
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
