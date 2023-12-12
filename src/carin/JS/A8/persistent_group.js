// persistent group below this comment
class PGroup {
  constructor(initialArray = []) {
    this.content = [...initialArray];
  }
  add(element) {
    let newPGroup = PGroup.from(this.content);
    if (!this.has(element)) {
      newPGroup.content.push(element);
      return newPGroup;
    } else return newPGroup;
  }
  delete(element) {
    return new PGroup(this.content.filter((e) => !(e === element)));
  }
  has(element) {
    return this.content.includes(element);
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
