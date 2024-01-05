import styled from "styled-components";

const ContainerSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-radius: 25px;
  align-items: center;
`;

const InputSearch = styled.input`
  padding: 2px 0;
  background-color: #f9f9f9;
  font-size: 17px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const TextSearch = styled.p`
  border: none;
  background-color: #f9f9f9;
  padding: 0 5px;
  cursor: pointer;
  font-size: 17px;
`;
const IconSearch = styled.i`
  font-size: 20px;
`;
export { ContainerSearch, InputSearch, TextSearch, IconSearch };
