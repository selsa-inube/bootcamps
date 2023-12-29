import styled from "styled-components";
const StyledFooter = styled.header`
  border-top: 1px solid #a1a1a1;
  margin-top: 20px;
  padding-top: 15px;
`;
const StyleFooterMain = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyleList = styled.ul`
  display: flex;

  list-style: none;
  align-items: center;
`;
const StyleMarker = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #7a7a7a;
`;
const StyleText = styled.p`
  font-weight: 700;
  font-size: 15px;
`;

const StyledContainerTarget = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

export {
  StyledFooter,
  StyleFooterMain,
  StyleList,
  StyleMarker,
  StyleText,
  StyledContainerTarget,
};
