class Group {
  constructor() {
    this.members = [];
  }

  add(parameter) {
    if (!this.has(parameter)) {
      this.members.push(parameter); //nuevo miemrbo
    }
  }

  delete(parameter) {
    this.members = this.members.filter((p) => p !== parameter);
  }

  has(parameter) {
    return this.members.includes(parameter); //pregunta si esta incluido ese valor
  }

  static from(iteration) {
    let group = new Group();
    for (let parameter of iteration) {
      group.add(parameter);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
