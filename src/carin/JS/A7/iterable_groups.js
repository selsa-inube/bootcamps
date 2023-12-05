require("./groups.js");

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }
  next() {
    if (this.i == this.group.content.length) {
      return { done: true };
    } else {
      let value = {
        i: this.i,
        value: this.group.content[this.i],
        done: false,
      };
      this.i++;
      return value;
    }
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
