console.log("###############Deep comparison########");

const deepEqual = (element1, element2) => {
  let result = true;
  let flag = true;
  if (!(typeof element1 == typeof element2)) flag = false;
  if (!(typeof element1 == "object")) flag = false;
  if (!element1) flag = false;
  if (!element2) flag = false;

  if (flag) {
    Object.keys(element1).forEach((element) => {
      if (!deepEqual(element1[element], element2[element])) {
        result = false;
        return false;
      }
    });
  } else {
    result = element1 === element2;
    return element1 === element2;
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
console.log(deepEqual(2, 3));
console.log(deepEqual([1, 2], [1, 2]));
console.log(deepEqual(null, null));
