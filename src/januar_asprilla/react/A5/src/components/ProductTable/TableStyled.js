import styled from "styled-components";
const StoreContainer = styled.div`
  display: grid;
  padding: 20px 40px;
  justify-content: center;
  justify-items: center;
  background-color: #fef08a;
  font-family: "Nunito", sans-serif;
  max-width: max-content;
  margin: auto;
  border-radius: 20px;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  border-bottom: 2px solid #000;
`;
const Table = styled.table`
  margin: 0 auto;
`;
const Thead = styled.thead``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td``;
const Tbody = styled.tbody``;

export { Table, Thead, Tr, Th, Tbody, Td, Title, StoreContainer };
