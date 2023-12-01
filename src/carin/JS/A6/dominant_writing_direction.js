const SCRIPTS = require("./scripts.js");

require("./scripts.js");

// countBy function defined in 05_higher_order
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// characterScript function defined in 05_higher_order
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// textScripts function partially defined in 05_higher_order
function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";
  return scripts;
}

// Solution
function dominantDirection(text) {
  let scripts = textScripts(text);
  let majorScript = null;
  let currentCount = 0;
  scripts.map(({ name, count }) => {
    if (count > currentCount) majorScript = name;
  });
  return SCRIPTS.filter((s) => s.name == majorScript)[0].direction;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
