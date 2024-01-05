import styled from "styled-components";

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

const StyledText = styled.p`
  color: #b9b4b4;
`;

const StyledIcons = styled.i`
  color: ${(props) => (props.active ? "#ffb83f" : "#b9b4b4")};
  border: 4px solid ${(props) => (props.active ? "#ffb83f" : "#b9b4b4")};
  border-radius: 5px;
  padding: 5px 10px;
  height: 35px;
  width: 40px;
`;

const StyledContainerIcons = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  transform: translateX(3px);
  text-align: center;
  justify-content: center;
  border-right: 5px solid ${(props) => (props.active ? "#ffb83f" : "none")};
`;

export { StyledItems, StyledText, StyledIcons, StyledContainerIcons };
