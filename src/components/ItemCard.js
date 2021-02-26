import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardStyled = styled.div`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 10px;
  height: 100%;
  img {
    height: 200px;
  }
`;

export default function ItemCard({ item }) {
  const { imageUrl, name, price, isOnSale, description, _id, avgRating } = item;
  return (
    <CardStyled>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>{avgRating}</p>
      <p>{price}</p>
      <p>{isOnSale}</p>
      <p>{description}</p>
      <p>{_id} </p>
    </CardStyled>
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
