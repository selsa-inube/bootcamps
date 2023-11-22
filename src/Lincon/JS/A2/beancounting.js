function countBs(string) {
  let contador = 0;
  for (let a = 0; a < string.length; a++) {
    if (string[a] === "B") {
      contador++;
    }
  }
  return contador;
}

function countChar(string, ch) {
  let contador = 0;
  for (let a = 0; a < string.length; a++) {
    if (string[a] === ch) {
      contador++;
    }
  }
  return contador;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "a"));
