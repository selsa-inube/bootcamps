import styled from "styled-components";

const StyledSearchBar = styled.section`
  border-radius: 5px;
  grid-column: 2/4;
  grid-row: 1/2;
`;
const SearchBarContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 10px;
  gap: 60px;
`;
export { StyledSearchBar, SearchBarContainer, ContactContainer };
