import React, { useState } from "react";
import { Board } from "../Board";
import { StyledGame, GameBoard, GameInfo } from "./styled";
import { MoveList } from "../List";

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

  return (
    <StyledGame>
      <GameBoard>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </GameBoard>
      <GameInfo>
        <MoveList history={history} jumpTo={jumpTo} />
      </GameInfo>
    </StyledGame>
  );
}

export { Game };
