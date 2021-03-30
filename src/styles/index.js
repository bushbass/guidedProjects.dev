import styled from 'styled-components';
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    background: orange;
    border: none;
    padding: 7px;
    width: 200px;
    border-radius: 5px;
    color: white;
  }
`;
export const ImageDiv = styled.div`
  img {
    max-width: 350px;
    margin: 25px;
  }
  @media (max-width: 768px) {
    max-width: 350px;
    margin: 25px;
  }
`;
export const CardStyled = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 300px;
  .description {
    border-top: 1px solid gray;
    width: 100%;
    padding-top: 15px;
  }
  p {
    text-align: left;
  }
  .price {
    font-weight: bold;
  }
  button {
    background: orange;
    border: none;
    padding: 7px;
    margin-top: 1rem;
    width: 200px;
    border-radius: 5px;
    color: white;
  }
  button:active {
    transform: translate(1px, 1px);
    transition: 0.1s;
  }
`;
export const OnSale = styled.div`
  background: red;

  color: white;
  width: 30%;
  padding: 7px;
  border-radius: 7px;
`;
