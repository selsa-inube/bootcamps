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
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
