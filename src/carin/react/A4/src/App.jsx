import { useState } from "react";
import { GameBoard, GridRow, Button } from "./styles.js";

const colorForSquare = (tik) => {
  switch (tik) {
    case 1:
      return "red";
    case 0:
      return "blue";
    default:
      return "black";
  }
};

const Square = ({ takeTurn, id, finished }) => {
  const mark = ["O", "X", "+"];
  const [filled, setFilled] = useState(false);
  const [tik, setTik] = useState(2);

  return (
    <Button
      $inputColor={colorForSquare(tik)}
      disabled={finished || filled}
      onClick={() => {
        setTik(takeTurn(id));
        setFilled(true);
        console.log(`Square: ${id} filled by player : ${tik}`);
      }}
    >
      <p>{mark[tik]}</p>
    </Button>
  );
};

function renderSquare(i, takeTurn, finished) {
  return <Square takeTurn={takeTurn} id={i} finished={finished}></Square>;
}

const Board = () => {
  const [player, setPlayer] = useState(1);
  const [gameState, setGameState] = useState([]);
  const [finished, setFinished] = useState(false);
  let status = `Winner is ${checkForWinner(gameState).player}`;
  if (checkForWinner(gameState).finished && !finished) {
    setFinished(true);
  }

  let playerTurn = `Next Player: ${player == "0" ? "Player O" : "Player X"}`;

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2);
    return player;
  };

  return (
    <GameBoard>
      <GridRow>
        {renderSquare(0, takeTurn, finished)}
        {renderSquare(1, takeTurn, finished)}
        {renderSquare(2, takeTurn, finished)}
      </GridRow>
      <GridRow>
        {renderSquare(3, takeTurn, finished)}
        {renderSquare(4, takeTurn, finished)}
        {renderSquare(5, takeTurn, finished)}
      </GridRow>
      <GridRow>
        {renderSquare(6, takeTurn, finished)}
        {renderSquare(7, takeTurn, finished)}
        {renderSquare(8, takeTurn, finished)}
      </GridRow>
      <div id="info">
        <p id="turn">{playerTurn}</p>
        <p>{status}</p>
      </div>
    </GameBoard>
  );
};

const App = () => {
  return (
    <div>
      <Board></Board>
    </div>
  );
};

const win = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // cols
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

const checkForWinner = (gameState) => {
  if (gameState.length < 5) return "No Winner Yet";
  let p0 = gameState.filter((item) => {
    if (item.player == 0) return item;
  });
  p0 = p0.map((item) => item.id);
  let px = gameState.filter((item) => {
    if (item.player == 1) return item;
  });
  px = px.map((item) => item.id);
  if (p0 != null && px != null) {
    var win0 = win.filter((item) => {
      return isSuperset(new Set(p0), new Set(item));
    });
    var winX = win.filter((item) => {
      return isSuperset(new Set(px), new Set(item));
    });
  }
  if (win0.length > 0) {
    return { player: "Player O ", finished: true };
  } else if (winX.length > 0) {
    return { player: "Player X ", finished: true };
  }
  return { player: "No Winner Yet", finished: false };
};

function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

export default App;
