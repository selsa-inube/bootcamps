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

console.log("###############Reversing an array########");

const reverseArray = (myArray) => {
  let result = [];
  myArray.forEach((element) => {
    result.unshift(element);
  });
  return result;
};

const reverseArrayInPlace = (myArray) => {
  let aux = [...myArray];
  aux.forEach((element) => {
    myArray.unshift(element);
  });
  myArray.splice(myArray.length / 2, myArray.length / 2);
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("###############A list########");
const prepend = (element, myList) => {
  myList = JSON.stringify(myList);
  let result = `{"value": ${element}, "rest": ${myList}}`;
  return JSON.parse(result);
};

const nth = (myList, index) => {
  if (index === 0) {
    return myList.value;
  } else if (!myList.rest) {
    return;
  } else {
    return nth(myList.rest, index - 1);
  }
};

const arrayToList = (myArray) => {
  let result = null;
  let aux = reverseArray(myArray);
  aux.forEach((element) => {
    result = prepend(element, result);
  });
  return result;
};

const listToArray = (myList) => {
  let index = 0;
  let result = [];
  while (nth(myList, index)) {
    result.push(nth(myList, index));
    index++;
  }
  return result;
};
// Your code here.
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

console.log("###############Deep comparison########");

const deepEqual = (element1, element2) => {
  let result = true;
  if (
    typeof element1 == typeof element2 &&
    typeof element1 == "object" &&
    element1 &&
    element2
  ) {
    Object.keys(element1).forEach((element) => {
      if (!deepEqual(element1[element], element2[element])) {
        result = false;
        return false;
      }
    });
  } else {
    result = element1 === element2;
  }
  return result;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
