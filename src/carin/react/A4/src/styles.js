import styled from "styled-components";

const StyledGameBoard = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-color: #34495e;
  color: rgb(204, 28, 28);
  border: 6px solid #0b0d0f;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  font-size: 2rem;
`;

const StyledGridRow = styled.div`
  border: 6px solid #739dc7;
  border-radius: 6px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgb(175, 70, 70);
`;

const StyledButton = styled.button`
  background-color: #0c80f3;
  border: 6px solid #0ff166;
  border-radius: 10px;
  font-size: 2rem;
  line-height: 1em;
  padding: 0;
  color: ${(props) => props.$inputColor || "red"};
`;

export { StyledGameBoard, StyledGridRow, StyledButton };
