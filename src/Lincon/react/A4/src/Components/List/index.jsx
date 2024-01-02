import React from "react";
import { Button, StyledOl } from "./styled";
function MoveList({ history, jumpTo }) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)}>{description}</Button>
      </li>
    );
  });

  return <StyledOl>{moves}</StyledOl>;
}

export { MoveList };
