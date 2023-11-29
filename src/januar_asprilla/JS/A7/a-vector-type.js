console.log("///////////A vector type////////////");
// creando la clase Vec
class Vec {
  // El constructor para recibir los parámetros x / y
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Método plus que es par sumar(+) los vectores
  plus(otherVector) {
    return new Vec(this.x + otherVector.x, this.y + otherVector.y);
  }

  // Método minus que es par restar(-) los vectores
  minus(otherVector) {
    return new Vec(this.x - otherVector.x, this.y - otherVector.y);
  }

  // la propiedad get length para calcular la longitud, es decir la distancia del origen
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Casos de prueba
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
