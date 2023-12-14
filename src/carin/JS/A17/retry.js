class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  return a * b;
}

console.log(reliableMultiply(8, 8));
// → 64

const keepTrying = (a, b) => {
  for (;;) {
    try {
      let multiplication = primitiveMultiply(a, b);
      console.log("You dit it!", multiplication);
      return multiplication;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log("Try again. Error:", e.message);
      } else {
        throw e;
      }
    }
  }
};

keepTrying(8, 3);
