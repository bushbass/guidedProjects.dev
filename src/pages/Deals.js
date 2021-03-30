import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';

const Container = styled.div`
  display: grid;
  width: 80%;
  padding-top: 1rem;
  align-items: start;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export default function Deal() {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/list?isOnSale=true`)
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  return (
    <div className="home">
      <h2>Check out these amazing deals!</h2>
      <Container>
        {!deals ? (
          <p>There are no on sale items at this time</p>
        ) : (
          deals?.items?.map((item) => <ItemCard key={item._id} item={item} />)
        )}
      </Container>
    </div>
  );
}
