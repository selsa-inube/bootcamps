import Board from "../boardComponents";
import { useState } from "react";
import {
  GameContainer,
  GameInfo,
  History,
  HistoryContainer,
  HistoryButton,
  AllApp,
  TitleGame,
} from "./gameStyled";
function ListHistorys({ children }) {
  return <History>{children}</History>;
}
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Ir al movimiento #" + move;
    } else {
      description = "Ir al inicio del juego";
    }
    return (
      <HistoryContainer key={move}>
        <HistoryButton onClick={() => jumpTo(move)}>
          {description}
        </HistoryButton>
      </HistoryContainer>
    );
  });
  return (
    <AllApp>
      <TitleGame>Tic Tac Toe</TitleGame>
      <GameContainer>
        <GameInfo>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </GameInfo>
        <GameInfo>
          <ListHistorys>{moves}</ListHistorys>
        </GameInfo>
      </GameContainer>
    </AllApp>
  );
}

export default Game;
