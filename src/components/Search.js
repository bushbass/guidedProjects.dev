import styled from 'styled-components';
import CartContext from '../context/CartContext';
import { useContext, useState } from 'react';

const SearchBar = styled.div`
  background: gray;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 350px;
    font-size: 1.2rem;
    margin-right: 20px;
  }
  button {
    line-height: 1.4rem;
  }
`;

export default function Search({ item }) {
  const { cart } = useContext(CartContext);
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState('');

  function handleInputChange(event) {
    return setInputText(event.target.value);
  }

  function onSearch(searchTerm, event) {
    const result = cart.filter((item) => {
      console.log(item.name.toLowerCase());
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log({ result });
    if (result !== '') {
      setSearchResult(result);
    }
    if (result === '') {
      setSearchResult([{ name: 'Nothing returned from search' }]);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(inputText);
  }
  return (
    <SearchBar>
      {console.log('search', searchResult)}
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
          value={inputText}
        />
        <button>Search</button>
      </form>
    </SearchBar>
  );
}
