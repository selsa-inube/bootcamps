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
