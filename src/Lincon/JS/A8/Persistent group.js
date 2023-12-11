class PGroup {
  constructor(members = []) {
    this.members = members;
  }

  add(parameter) {
    return this.has(parameter)
      ? new PGroup([...this.members])
      : new PGroup([...this.members, parameter]);
  }

  delete(parameter) {
    return new PGroup(this.members.filter((member) => member !== parameter));
  }

  has(parameter) {
    return this.members.includes(parameter);
  }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let b = a.add("a");
console.log(a === b); // true

let ab = a.add("b");
let bWithoutA = ab.delete("a");
console.log(bWithoutA.has("b")); // true
console.log(a.has("b")); // false
console.log(bWithoutA.has("a")); // false
