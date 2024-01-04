import styled from "styled-components";
const StyledPrincipal = styled.div`
  display: grid;
  grid-template-columns: 35% 35% 30%;
  margin-top: 30px;
`;
const StyledSectionOne = styled.section``;
const StyledSectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-left: 2px solid #a1a1a1;
  border-right: 2px solid #a1a1a1;
  padding: 0 30px;
`;
const StyledSectionThree = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
`;
const StyledButton = styled.section`
  border: none;
  color: #7a7a7a;
  cursor: pointer;
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 5px;
`;
const StyledTitleNoticia = styled.section`
  font-size: 19px;
  font-weight: 700;
`;
const StyledIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  i:nth-child(1) {
    font-size: 15px;
  }
  i:nth-child(2) {
    color: #a1a1a1;
    font-size: 10px;
  }
  i:nth-child(3) {
    color: #a1a1a1;
    font-size: 10px;
  }
`;
export {
  StyledPrincipal,
  StyledSectionOne,
  StyledSectionTwo,
  StyledSectionThree,
  StyledTitleNoticia,
  StyledButton,
  StyledIcons,
};
