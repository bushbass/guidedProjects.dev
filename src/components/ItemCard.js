import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border: 1px solid grey;
  border-radius: 3px;
  height: 100%;
  button {
    background: orange;
    border: none;
    padding: 7px;
    width: 200px;
    border-radius: 5px;
    color: white;
  }
`;
const CardStyled = styled.div`
  padding: 10px;
  flex-grow: 1;
  img {
    height: 200px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  .productName {
    font-size: 1rem;
  }
  a {
    color: black;
  }
  a:hover {
    transform: none;
  }
`;
const OnSale = styled.div`
  background: red;
  color: white;
  width: 30%;
  padding: 7px;
  border-radius: 7px;
`;

export default function ItemCard({ item }) {
  const { imageUrl, name, price, isOnSale, description, _id, avgRating } = item;
  return (
    <CardContainer>
      <CardStyled>
        <img src={imageUrl} alt={name} />
        <Link to={`/item/${_id}`}>
          <p className="productName">{name}</p>
        </Link>
        <Rating height={'30px'} stars={avgRating} />
        <p>${price}</p>
        {isOnSale && <OnSale>On sale</OnSale>}
        <p>{description}</p>
      </CardStyled>
      <Link to={`/item/${_id}`}>
        <button>View Item</button>
      </Link>
    </CardContainer>
  );
}
ItemCard.propTypes = {
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
