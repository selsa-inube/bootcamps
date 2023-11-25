console.log("////Minimum/////");

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(0, 10));
console.log(min(0, -10));

console.log("////Recursion/////");

function isEven(n) {
  switch (true) {
    case n === 0:
      return true;
    case n === 1:
      return false;
    case n < 0:
      return isEven(-n);
    default:
      return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

console.log("////Bean counting/////");

function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
