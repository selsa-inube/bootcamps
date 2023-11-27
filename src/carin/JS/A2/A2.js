console.log("######MINIMUM##########");
const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

console.log(min(0, 10));
console.log(min(0, -10));

console.log("##########RECURSION#########");
const isEven = (N) => {
  if (N === 1) {
    return false;
  } else if (N === 0) {
    return true;
  } else if (N > 1) {
    return isEven(N - 2);
  } else {
    return isEven(N + 2);
  }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

console.log("##########Bean counting#########");

const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
};

const countBs = (string) => {
  return countChar(string, "B");
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
