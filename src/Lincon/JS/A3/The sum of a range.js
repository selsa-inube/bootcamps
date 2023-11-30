function range(star, end, step = 1) {
  let result = [];
  let condition =
    step > 0 ? (number) => number <= end : (number) => number >= end;

  for (let number = star; condition(number); number += step) {
    result.push(number);
  }

  return result;
}

function sum(array) {
  return array.reduce((total, currentValue) => total + currentValue, 0);
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
