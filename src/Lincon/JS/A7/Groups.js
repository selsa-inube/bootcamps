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
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
