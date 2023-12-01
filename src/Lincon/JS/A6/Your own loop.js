function loop(start, test, update, body) {
  for (let i = start; test(i); i = update(i)) {
    //bucle dinamico
    body(i);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
