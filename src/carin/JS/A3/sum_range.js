console.log("###############The sum of a range########");
const range = (a, b, step) => {
  let result = [];
  if (!step) {
    step = 1;
  }
  for (let i = a; Math.min(a, b) <= i && i <= Math.max(a, b); i += step) {
    result.push(i);
  }
  return result;
};

const sum = (numbersToSum) => {
  let result = 0;
  numbersToSum.forEach((element) => {
    result += element;
  });
  return result;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(2, 8, 2));
console.log(sum(range(1, 10)));
// → 55
