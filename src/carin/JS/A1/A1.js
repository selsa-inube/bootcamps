// Looping a triangle
console.log("########### Looping a triangle ############");
var a = "#";
while (a.length <= 7) {
  console.log(a);
  a += "#";
}

//FizzBuzz
console.log("########### FizzBuzz ############");
let a = 1;
while (a <= 100) {
  let toPrint = a;
  if (a % 3 == 0) {
    toPrint += "Fizz";
  }
  if (a % 5 == 0) {
    toPrint += "Buzz";
  }
  if (a != toPrint) {
    toPrint = toPrint.split(a)[1];
  }
  console.log(toPrint);
  a += 1;
}

//Chessboard
console.log("########### Chessboard ############");
const size = 8;

let toPrint = "";
let row = 0;
for (let a = 1; a <= Math.pow(size, 2); a++) {
  if ((a + row * ((size + 1) % 2)) % 2 == 1) {
    toPrint += " ";
  } else {
    toPrint += "#";
  }

  if (a % size == 0) {
    toPrint += "\n";
    row++;
  }
}
console.log(toPrint);
