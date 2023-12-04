let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
console.log(hasOwnProperty.call(map, "one"));
// → true

/* Esta es otra solucion al ejercicio
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
*/
