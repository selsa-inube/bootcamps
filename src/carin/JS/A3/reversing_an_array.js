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
