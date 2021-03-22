import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';

const Container = styled.div`
  display: grid;
  width: 80%;

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
  if (!deals) return <p>There are no on sale items at this time</p>;

  return (
    <div className="home">
      <h2>Deals page</h2>
      <Container>
        {deals?.items?.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </Container>
    </div>
  );
}
