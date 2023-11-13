// Looping a triangle
console.log("########### Looping a triangle ############");
var a = "#";
while (a.length <= 7) {
  console.log(a);
  a += "#";
}

//FizzBuzz
console.log("########### FizzBuzz ############");
var a = 1;
while (a <= 100) {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log("FizzBuzz");
  } else if (a % 3 == 0) {
    console.log("Fizz");
  } else if (a % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
  a += 1;
}

//Chessboard
console.log("########### Chessboard ############");
const c = 8;

let b = "";
for (let a = 1; a <= Math.pow(c, 2); a++) {
  if (a % 2 == 1) {
    b += " ";
  } else {
    b += "#";
  }

  if (a % c == 0) {
    console.log(b);
    b = "";
  }
}
