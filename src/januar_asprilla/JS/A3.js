console.log("/////The sum of a range/////");

function generateRange(start, end, step = 1) {
  let result = [];
  let condition = step > 0 ? (num) => num <= end : (num) => num >= end;

  for (let num = start; condition(num); num += step) {
    result.push(num);
  }

  return result;
}

function calculateSum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

console.log(generateRange(1, 10));
console.log(generateRange(5, 2, -1));
console.log(calculateSum(generateRange(1, 10)));

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

console.log("/////A list/////");

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(lst) {
  let array = [];
  for (let node = lst; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prependToList(value, lst) {
  return { value, rest: lst };
}

function nthFromList(lst, n) {
  if (!lst) return undefined;
  else if (n == 0) return lst.value;
  else return nthFromList(lst.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prependToList(10, prependToList(20, null)));
console.log(nthFromList(arrayToList([10, 20, 30]), 1));

console.log("//////Deep comparison//////");

function deepEquality(objA, objB) {
  if (objA === objB) return true;

  if (
    objA == null ||
    typeof objA != "object" ||
    objB == null ||
    typeof objB != "object"
  )
    return false;

  let keysA = Object.keys(objA),
    keysB = Object.keys(objB);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEquality(objA[key], objB[key]))
      return false;
  }
  return true;
}

let object = { here: { is: "an" }, object: 2 };

console.log(deepEquality(object, object));
console.log(deepEquality(object, { here: 1, object: 2 }));
console.log(deepEquality(object, { here: { is: "an" }, object: 2 }));
