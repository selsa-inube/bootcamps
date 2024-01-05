import styled from "styled-components";

const StyledCreditContainer = styled.div`
  margin: 0 auto;
  width: 550px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
  position: relative;
`;

const StyledExpiresContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledText = styled.p`
  display: flex;
  width: 40px;
  font-size: 12px;
  text-align: end;
  color: #b9b4b4;
`;

const StyledDate = styled.p`
  font-size: 25px;
`;

const StyledName = styled.p`
  font-size: 24px;
`;

const StyledContainerDates = styled.div`
  display: flex;
  width: 80%;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
`;

const StyledContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`;

const StyledIcons = styled.div``;

export {
  StyledCreditContainer,
  StyledExpiresContainer,
  StyledText,
  StyledDate,
  StyledName,
  StyledContainerDates,
  StyledContainerItems,
  StyledIcons,
};
