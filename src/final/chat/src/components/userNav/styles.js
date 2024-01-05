import styled from "styled-components";

const StyledUserNav = styled.section`
  grid-column: 1/2;
  grid-row: 1/4;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  background-color: #16172b;
  flex-direction: column;
`;

const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
  border-bottom: 1px solid #b1acac24;
  padding-bottom: 20px;
`;

const StyledConatinerSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`;

const StyledContainerP = styled.div`
  display: flex;
  padding: 0 20px;
`;

export {
  StyledUserNav,
  StyledDataContainer,
  StyledConatinerSettings,
  StyledContainerP,
};
