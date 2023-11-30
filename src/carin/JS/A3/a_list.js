console.log("###############A list########");
require("./reversing_an_array.js");
const prepend = (element, myList) => {
  myList = JSON.stringify(myList);
  let result = `{"value": ${element}, "rest": ${myList}}`;
  return JSON.parse(result);
};

const prepend2 = (element, myList) => {
  return { value: element, rest: myList };
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
console.log(prepend2(10, prepend2(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
