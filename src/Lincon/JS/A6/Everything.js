function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

function every2(array, test) {
  return !array.some((element) => !test(element));
}
//test de funcion every sin some usando bucle for of
console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));
//tesr de funcion every2 usando metodo some
console.log(every2([1, 3, 5], (n) => n < 10));
console.log(every2([2, 4, 16], (n) => n < 10));
console.log(every2([], (n) => n < 10));
