class Group {
  constructor() {
    this.content = [];
  }
  add(element) {
    if (!this.has(element)) {
      this.content.push(element);
    }
  }
  delete(element) {
    if (this.has(element)) {
      this.content.splice(this.content.indexOf(element), 1);
    }
  }
  has(element) {
    if (this.content.indexOf(element) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  static from(iterableObject) {
    let newGroup = new Group();
    if (iterableObject.length) {
      for (let i = 0; i < iterableObject.length; i++) {
        newGroup.add(iterableObject[i]);
      }
    }
    return newGroup;
  }
}

let group = Group.from([10, 20]);

console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// taken from scripts.
if (
  typeof module != "undefined" &&
  module.exports &&
  (typeof window == "undefined" || window.exports != exports)
)
  module.exports = Group;
if (typeof global != "undefined" && !global.Group) global.Group = Group;
