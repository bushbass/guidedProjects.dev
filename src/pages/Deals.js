import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
import Pagination from '../components/Pagination';

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
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  useEffect(() => {
    fetch(
      `https://gp-super-store-api.herokuapp.com/item/list?isOnSale=true&from=${pageCount}&size=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, [pageCount, pageSize]);

  return (
    <div className="home">
      <h2>Check out these amazing deals!</h2>
      <Pagination
        next={deals.next}
        total={deals.total}
        setPageCount={setPageCount}
        pageCount={pageCount}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
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
