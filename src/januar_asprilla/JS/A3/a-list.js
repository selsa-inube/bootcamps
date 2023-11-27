console.log("/////A list/////");

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(lst) {
  let array = [];
  for (let node = lst; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prependToList(value, lst) {
  return { value, rest: lst };
}

function nthFromList(lst, n) {
  if (!lst) return undefined;
  else if (n == 0) return lst.value;
  else return nthFromList(lst.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prependToList(10, prependToList(20, null)));
console.log(nthFromList(arrayToList([10, 20, 30]), 1));
