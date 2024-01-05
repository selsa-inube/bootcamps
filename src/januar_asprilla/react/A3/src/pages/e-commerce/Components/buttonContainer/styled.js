import styled from "styled-components";

const OffContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  background-color: #e3e3fd;
  color: #4441d2;
  padding: 8px;
  border-radius: 9px;
`;

const TextPercentage = styled.p`
  font-weight: bolder;
  font-size: 15px;
`;

const OffText = styled.p`
  font-weight: bolder;
  font-size: 15px;
`;

export { OffContainer, TextPercentage, OffText };
