import styled from "styled-components";

const BoardRow = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

const SquareButton = styled.button`
  background: #b8e6af;

  border: 2px solid #71a467;
  float: left;
  font-size: 80px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
`;
const ContainerStatus = styled.div`
  display: flex;
  color: #1a432d;
  justify-content: center;
  font-size: 24px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-style: italic;
  font-weight: normal;
  line-height: 34px;
  margin-bottom: 10px;
  color: #295837;
`;

export { BoardRow, SquareButton, ContainerStatus };
