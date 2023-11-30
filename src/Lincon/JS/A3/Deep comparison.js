function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    obj1 === null ||
    typeof obj1 != "object" ||
    obj2 === null ||
    typeof obj2 != "object"
  )
    return false;

  let keysA = Object.keys(obj1),
    keysB = Object.keys(obj2);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
