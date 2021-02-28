import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemCard from '../components/ItemCard';

const HomeContainer = styled.div`
  display: grid;
  width: 80%;
  align-items: start;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
`;

export default function Home() {
  useEffect(() => {
    fetch('https://gp-super-store-api.herokuapp.com/item/list')
      .then((res) => res.json())
      .then((data) => setitemList(data.items));
  }, []);

  const [itemList, setitemList] = useState([]);

  return (
    <div className="home">
      <h2>Home page!</h2>
      <HomeContainer>
        {itemList.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
        {console.log(itemList)}
      </HomeContainer>
    </div>
  );
}
