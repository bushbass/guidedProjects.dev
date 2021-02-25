import styled from 'styled-components';
import PropTypes, { bool } from 'prop-types';

const CardStyled = styled.div`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 10px;
  height: 100%;
  img {
    height: 200px;
  }
`;

function ItemCard({ item }) {
  console.log({ item });
  const { imageUrl, name, price, isOnSale, description, _id } = item;
  return (
    <CardStyled>
      <img src={imageUrl} alt={name} /> <p>{name}</p>
      <p> {price}</p>
      <p>{isOnSale}</p>
      <p>{description}</p>
      <p>{_id} </p>
    </CardStyled>
  );

  ItemCard.PropTypes = {
    item: string,
    // imageUrl: string,
    // name: string,
    // price: string,
    // isOnSale: bool,
    // description: string,
    // _id: string,
  };
}

export default ItemCard;
