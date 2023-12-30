import styled from "styled-components";

const AllApp = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f3eae8;
`;
const TitleGame = styled.h1`
  color: #073517;
  font-size: 55px;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  margin: 10px;
`;
const GameContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const GameInfo = styled.div`
  justify-self: center;
  margin: 10px;
`;
const History = styled.ol``;
const HistoryContainer = styled.li`
  list-style: none;
`;
const HistoryButton = styled.button`
  background: #b0d9ff;
  border: 2px solid #00a5ff;
  padding: 10px;
  border-radius: 25px;
  margin: 5px 10px;
`;
export {
  GameContainer,
  GameInfo,
  History,
  HistoryContainer,
  HistoryButton,
  AllApp,
  TitleGame,
};
