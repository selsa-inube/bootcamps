class Vec {
  constructor(x = 0, y = 0) {
    let validX = true;
    let validY = true;
    if (!(typeof x == "number")) validX = false;
    if (!(typeof y == "number")) validY = false;
    if (validX & validY) {
      this.x = x;
      this.y = y;
    }
  }

  plus(vector2) {
    return new Vec(this.x + vector2.x, this.y + vector2.y);
  }

  minus(vector2) {
    return new Vec(this.x - vector2.x, this.y - vector2.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));

// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
