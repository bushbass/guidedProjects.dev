import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import { useEffect, useState } from 'react';

const HomeContainer = styled.div`
  display: grid;
  margin: 1rem 0 2rem 0;
  width: 80%;
  align-items: start;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
`;

export default function Home({ allItemsList }) {
  const [apiData, setApiData] = useState({});
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    fetch(
      `https://gp-super-store-api.herokuapp.com/item/list?from=${pageCount}&size=2`
    )
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [pageCount]);

  return (
    <div className="home">
      <Search />

      <h2>Check out all of our great products!</h2>

      <Pagination
        next={apiData.next}
        total={apiData.total}
        setPageCount={setPageCount}
        pageCount={pageCount}
      ></Pagination>
      <HomeContainer>
        {apiData?.items?.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </HomeContainer>
    </div>
  );
}
