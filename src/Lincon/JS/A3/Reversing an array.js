function reverseArray(array) {
  let reverse = []; //se guarda array al reverse

  for (let i = 0; i <= array.length - 1; i++) {
    reverse.unshift(array[i]);
  }

  return reverse;
}
function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }

  return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
