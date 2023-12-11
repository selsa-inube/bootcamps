console.log("////////////////The locked box////////////////");
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("¡Cerrado!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  const wasLocked = box.locked; // aqui se almacena el estado actual de la cerradura
  if (wasLocked) {
    box.unlock(); // aqui desbloqueamos la caja solo si la misma está cerrada
  }

  try {
    body(); // ejecutamos la función proporcionada
  } finally {
    if (wasLocked) {
      box.lock(); // Vuelve a bloquear la caja solo si estaba cerrada originalmente
    }
  }
}

withBoxUnlocked(function () {
  box.content.push("pieza de oro");
});

try {
  withBoxUnlocked(function () {
    throw new Error("¡Piratas en el horizonte! ¡Abortar!");
  });
} catch (e) {
  console.log("Error generado: " + e);
}
console.log(box.locked);
// → true
