console.log("###############Reversing an array########");

function reverseArray(myArray) {
  let result = [];
  myArray.forEach((element) => {
    result.unshift(element);
  });
  return result;
}

const reverseArrayInPlace = (myArray) => {
  const myArrayLength = 2 * myArray.length;
  for (let i = 0; i < myArrayLength; i += 2) {
    myArray.unshift(myArray[i]);
  }

  myArray.splice(myArray.length / 2, myArray.length / 2);
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// taken from scripts.
if (
  typeof module != "undefined" &&
  module.exports &&
  (typeof window == "undefined" || window.exports != exports)
)
  module.exports = reverseArray;
if (typeof global != "undefined" && !global.reverseArray)
  global.reverseArray = reverseArray;
