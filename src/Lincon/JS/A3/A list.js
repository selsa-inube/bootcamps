function arrayToList(array) {
  const reversedArr = array.slice().reverse();
  let list = null;

  reversedArr.forEach((value) => {
    list = { value, rest: list };
  });

  return list;
}
function listToArray(list) {
  let array = [];
  let node = list;
  while (node) {
    array.push(node.value);
    node = node.rest;
  }
  return array;
}
function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (n === 0) {
    return list.value;
  } else if (!list.rest) {
    return; // Caso base: cuando no hay más nodos y n no es 0, retornar undefined
  } else {
    return nth(list.rest, n - 1);
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
