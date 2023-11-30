class PGroup {
  constructor(members) {
    this.members = members;
  }

  add(parameter) {
    if (this.has(parameter)) return this;
    return new PGroup(this.members.concat([parameter]));
  }

  delete(parameter) {
    const p = this.members.indexOf(parameter);

    if (p === -1) {
      return this;
    }

    const newMembers = this.members.slice();
    newMembers.splice(p, 1);

    return new PGroup(newMembers);
  }

  has(parameter) {
    return this.members.includes(parameter);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
