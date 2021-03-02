import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './Rating';
import { Link } from 'react-router-dom';

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
            <p>{item._id} </p>
            <Link to={`/item/${item._id}`}>
              {console.log(item)}
              <button>Add to Cart</button>
            </Link>
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
