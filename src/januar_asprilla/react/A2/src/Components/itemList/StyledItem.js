import styled from "styled-components";

const ItemContainer = styled.li`
  list-style-type: none;
  text-align: center;
`;
const ItemStyled = styled.a`
  font-size: 15px;
  cursor: pointer;
  color: gray;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export { ItemContainer, ItemStyled };
