console.log("//Looping a triangle//");

for (let i = 1; i <= 7; i++) {
  let row = "";
  for (let a = 1; a <= i; a++) {
    row += "#";
  }
  console.log(row);
}

console.log("//FizzBuzz//");

for (let i = 1; i <= 100; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("FizzBuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}

console.log("//Chessboard//");

let size = 8;
let unit_size = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      unit_size += " ";
    } else {
      unit_size += "#";
    }
  }
  unit_size += "\n";
}

console.log(unit_size);
