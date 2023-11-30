console.log("////////Persistent Groups////////");

class PGroup {
  constructor(members) {
    this.members = members || [];
  }

  add(value) {
    if (!this.has(value)) {
      return new PGroup([...this.members, value]);
    }
    return this;
  }

  delete(value) {
    if (this.has(value)) {
      return new PGroup(this.members.filter((member) => member !== value));
    }
    return this;
  }

  has(value) {
    return this.members.includes(value);
  }

  static get empty() {
    if (!PGroup._empty) {
      PGroup._empty = new PGroup();
    }
    return PGroup._empty;
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b")); // → true
console.log(a.has("b")); // → false
console.log(b.has("a")); // → false
