import styled from 'styled-components';
import ItemCard from '../components/ItemCard';
import Search from '../components/Search';

const HomeContainer = styled.div`
  display: grid;
  margin-top: 1rem;
  width: 80%;
  align-items: start;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
`;

export default function Home({ allItemsList }) {
  return (
    <div className="home">
      <Search />
      <h2>Check out all of our great products!</h2>
      <HomeContainer>
        {allItemsList.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </HomeContainer>
    </div>
  );
}
