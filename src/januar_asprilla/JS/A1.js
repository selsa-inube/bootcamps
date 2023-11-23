console.log("//Looping a triangle//");

for (let i = 1; i <= 7; i++) {
  let asterisco = "";
  for (let a = 1; a <= i; a++) {
    asterisco += "#";
  }
  console.log(asterisco);
}

console.log("//FizzBuzz//");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("//Chessboard//");

let tamaño = 8;
let unidad_ta = "";

for (let i = 0; i < tamaño; i++) {
  for (let j = 0; j < tamaño; j++) {
    if ((i + j) % 2 === 0) {
      unidad_ta += " ";
    } else {
      unidad_ta += "#";
    }
  }
  unidad_ta += "\n";
}

console.log(unidad_ta);
