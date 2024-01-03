import styled from "styled-components";
const StyledCards = styled.div`
  position: relative;
  padding: 10px 15px;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 20px 0px;
`;
const StyledText = styled.div`
  display: flex;
  background-color: ${(props) => props.background};
  align-items: center;
  gap: 10px;

  i {
    color: #ffff;
  }
`;
const StyledTitle = styled.p`
  color: #ffff;
  font-size: 17px;
  background-color: ${(props) => props.background};
`;
const StyledParagraph = styled.p`
  color: #ffffff7e;
  font-size: 15px;
  background-color: ${(props) => props.background};
`;
const StyledNum = styled.p`
  color: #ffffff7e;
  font-size: 13px;
  background-color: ${(props) => props.background};
`;
const StyledClock = styled.p`
  color: #fff;
  font-size: 15px;
  background-color: ${(props) => props.background};
`;
export {
  StyledCards,
  StyledText,
  StyledTitle,
  StyledNum,
  StyledParagraph,
  StyledClock,
};
