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
  try {
    if (box.locked) {
      box.unlock();
      body();
    }
  } catch (e) {
    console.log("Error generado: " + e);
  } finally {
    box.lock();
  }
}

withBoxUnlocked(() => {
  box.content.push("pieza de oro");
});

try {
  withBoxUnlocked(() => {
    throw new Error("¡Piratas en el horizonte! ¡Abortar!");
  });
} catch (e) {
  console.log("Error generado: " + e);
}
console.log(box.locked);
// → true
