function countChar(string, ch) {
  let count = 0;
  for (let a = 0; a < string.length; a++) {
    if (string[a] === ch) {
      count++;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
