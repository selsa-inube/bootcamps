let map = { one: true, two: true, hasOwnProperty: true };

let hasOwnPropertyMethod = Object.prototype.hasOwnProperty;

console.log(hasOwnPropertyMethod.call(map, "one"));
console.log(hasOwnPropertyMethod.call(map, "two"));
console.log(hasOwnPropertyMethod.call(map, "hasOwnProperty"));
console.log(hasOwnPropertyMethod.call(map, "three"));
// → true
