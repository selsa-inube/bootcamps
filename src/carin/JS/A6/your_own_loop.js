const loop = (value, test_function, update_function, body_function) => {
  while (test_function(value)) {
    body_function(value);
    value = update_function(value);
  }
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
