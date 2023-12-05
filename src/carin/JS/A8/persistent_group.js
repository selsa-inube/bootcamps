// persistent group below this comment
class PGroup {
  constructor() {
    this.content = [];
  }
  add(element) {
    if (!this.has(element)) {
      let newPGroup = PGroup.from(this.content);
      newPGroup.content.push(element);
      return newPGroup;
      // return new PGroup(this.content);
    } else return this;
  }
  delete(element) {
    if (this.has(element)) {
      let newPGroup = PGroup.from(this.content);
      newPGroup.content.splice(this.content.indexOf(element), 1);
      return newPGroup;
      // return new PGroup(this.content);
    } else return this;
  }
  has(element) {
    if (this.content.indexOf(element) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  static from(iterableObject) {
    let newGroup = new PGroup();
    if (iterableObject.length) {
      for (let i = 0; i < iterableObject.length; i++) {
        if (!newGroup.has(iterableObject[i])) {
          newGroup.content.push(iterableObject[i]);
        }
      }
    }
    return newGroup;
  }
}
PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
