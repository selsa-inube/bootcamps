console.log("/////A list/////");

function arrayToList(arr) {
  // se utiliza slice() para no modificar el array original
  const reversedArr = arr.slice().reverse();
  let list = null;

  reversedArr.forEach((value) => {
    list = { value, rest: list };
  });

  return list;
}
function listToArray(lst) {
  let array = [];
  let node = lst;

  while (node) {
    array.push(node.value);
    node = node.rest;
  }

  return array;
}

function prependToList(value, lst) {
  return { value, rest: lst };
}

function nthFromList(lst, n) {
  if (!lst || lst.value === null) {
    return undefined;
  } else if (n === 0) {
    return lst.value;
  } else {
    return nthFromList(lst.rest, n - 1);
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prependToList(10, prependToList(20, null)));
console.log(nthFromList(arrayToList([10, 20, 30]), 1));
