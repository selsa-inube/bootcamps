import { Button } from "./styles";

function Square({ value, onSquareClick }) {
  return <Button onClick={onSquareClick}>{value}</Button>;
}

export { Square };
