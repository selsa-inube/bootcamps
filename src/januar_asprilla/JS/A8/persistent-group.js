console.log("////////Persistent Groups////////");

class PGroup {
  constructor(members = []) {
    this.members = members;
  }

  add(value) {
    if (!this.has(value)) {
      return new PGroup([...this.members, value]);
    }
    return new PGroup([...this.members]); // Devuelve una nueva instancia en lugar de la referencia actual
  }

  delete(value) {
    if (this.has(value)) {
      return new PGroup(this.members.filter((member) => member !== value));
    }
    return new PGroup([...this.members]); // Devuelva una nueva instancia en lugar de la referencia actual
  }

  has(value) {
    return this.members.includes(value);
  }

  static empty() {
    return new PGroup(); // Retorna una nueva instancia en lugar de usar una propiedad estática
  }
}

let a = PGroup.empty().add("a");
let b = a.add("a");
console.log(a === b); // false

let ab = a.add("b");
let c = ab.delete("a");

console.log(c.has("b")); // → true
console.log(a.has("b")); // → false
console.log(c.has("a")); // → false
