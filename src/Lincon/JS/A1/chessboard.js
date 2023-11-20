//Chessboard
console.log("----Chessboard----");
let board = "";
let FilaUno = "# # # # ";
let FilaDos = " # # # #";

for (let num = 0; num < 8; num += 1) {
  if (num % 2 == 0) {
    board += FilaDos + "\n";
  } else {
    board += FilaUno + "\n";
  }
}

console.log(board);
