const char1 = "#";
const char2 = " ";
const size = 8;

function changeChar(oldChar) {
  if (oldChar === char1) {
    return char2;
  } else {
    return char1;
  }
}

function createRow(size, char) {
  let row = "";
  let currentChar = char;
  for (let i = 0; i < size; i++) {
    row = row + currentChar;
    currentChar = changeChar(currentChar);
  }
  row = row + "\n";
  return row;
}

function createChessboard(size) {
  let chessboard = "";
  let currentChar = char2;
  for (let i = 0; i < size; i++) {
    chessboard = chessboard + createRow(size, currentChar);
    currentChar = changeChar(currentChar);
  }
  return chessboard;
}

console.log(createChessboard(size));
