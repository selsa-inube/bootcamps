function every(array, test) {
  let result = true;
  array.forEach((element) => {
    result = result && test(element);
    if (!result) return false;
  });
  return result;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
