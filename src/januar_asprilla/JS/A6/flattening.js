console.log("////////Flattening////////");

let arrays = [[[1, 2, 3], [4, 5], [6]]];
let flattenedMatrix = arrays.reduce(
  (accumulator, currentArray) => accumulator.concat(...currentArray),
  []
);

console.log(flattenedMatrix);

console.log("////////Your own loop////////");
function loop(value, test, update, body) {
  for (let current = value; test(current); current = update(current)) {
    body(current);
  }
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
