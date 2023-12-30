import styled from "styled-components";
const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;
const Thead = styled.thead`
  background-color: #514c5166;
  border-radius: 10px;
`;
const List = styled.tr`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
  padding: 20px;
  gap: 20px;
`;
const Name = styled.th`
  padding-top: 10px;
`;
const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  width: 100%;
  margin-top: 20px;
`;

export { Table, Thead, Name, List, Tbody };
