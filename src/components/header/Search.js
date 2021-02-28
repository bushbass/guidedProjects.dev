import styled from 'styled-components';

const SearchBar = styled.div`
  background: gray;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 350px;
    font-size: 1.3rem;
  }
`;

export default function Search() {
  return (
    <SearchBar>
      <input type="text" placeholder="search" />
    </SearchBar>
  );
}
