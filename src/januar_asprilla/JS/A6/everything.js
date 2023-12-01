console.log("////////Everything////////");
function everyConLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

console.log(everyConLoop([1, 3, 5], (n) => n < 10));
// → true

console.log(everyConLoop([2, 4, 16], (n) => n < 10));
// → false

console.log(everyConLoop([], (n) => n < 10));
// → true

console.log("/////////////");
function everyConSome(array, test) {
  // La negación de some devuelve true si ninguna coincidencia es encontrada
  return !array.some((element) => !test(element));
}

console.log(everyConSome([1, 3, 5], (n) => n < 10));
// → true

console.log(everyConSome([2, 4, 16], (n) => n < 10));
// → false

console.log(everyConSome([], (n) => n < 10));
// → true
