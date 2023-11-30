console.log("/////Reversing an array/////");

function reverseArray(arr) {
  let reversed = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    reversed.unshift(arr[i]);
  }

  return reversed;
}

function reverseArrayInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
