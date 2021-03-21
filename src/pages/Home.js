import styled from 'styled-components';
import ItemCard from '../components/ItemCard';

const HomeContainer = styled.div`
  display: grid;
  width: 80%;
  align-items: start;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
`;

export default function Home({ allItemsList }) {
  return (
    <div className="home">
      <h2>Home page!</h2>
      <HomeContainer>
        {allItemsList.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </HomeContainer>
    </div>
  );
}
