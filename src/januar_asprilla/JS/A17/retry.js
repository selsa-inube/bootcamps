console.log("////////////////Retry////////////////");
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) {
        // Si la excepción no es de tipo MultiplicatorUnitFailure,
        // la relanzamos para manejarla en otro lugar.
        throw error;
      }
      // Si es una excepción de tipo MultiplicatorUnitFailure, se intentara de nuevo.
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
