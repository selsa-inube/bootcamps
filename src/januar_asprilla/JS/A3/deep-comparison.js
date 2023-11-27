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
