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
  var wasLocked = box.locked;

  box.unlock(); // Desbloqueamos la caja

  try {
    body(); // Ejecutamos la función proporcionada
  } catch (error) {
    // Manejamos el error aquí con el catch
    console.error("Error detectado:", error.message);
  } finally {
    if (wasLocked) {
      box.lock(); // Volvemos a bloquear la caja solo si estaba cerrada originalmente
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
