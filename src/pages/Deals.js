import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "../components/ItemCard";

const Container = styled.div`
  display: grid;
  width: 80%;

  align-items: start;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export default function Deal() {
  useEffect(() => {
    fetch("https://gp-super-store-api.herokuapp.com/item/list")
      .then((res) => res.json())
      .then((data) => setitemList(data.items));
  }, []);

  const [itemList, setitemList] = useState([]);

  const dealFilter = itemList.filter((item) => item.isOnSale === true);

  if (dealFilter.length === 0)
    return <p>There are no on sale items at this time</p>;

  return (
    <div className="home">
      <h2>Home page</h2>
      <Container>
        {itemList
          .filter((item) => item.isOnSale === true)
          .map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        {console.log(itemList)}
      </Container>
    </div>
  );
}
