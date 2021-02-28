import styled from "styled-components";
import PropTypes from "prop-types";
import Rating from "./Rating";

const CardStyled = styled.div`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 150px;
    height: auto;
  }
`;

export default function ItemCard({ item }) {
  const { imageUrl, name, price, isOnSale, description, _id, avgRating } = item;
  return (
    <CardStyled>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <Rating stars={avgRating} />
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
    _id: PropTypes.string
  })
};
