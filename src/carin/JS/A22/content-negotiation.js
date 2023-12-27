const url = "https://eloquentjavascript.net/author";
const types = [
  "text/plain",
  "text/html",
  "application/json",
  "application/rainbows+unicorns",
];

for (let type of types) {
  fetch(url, { headers: { accept: type } })
    .then((data) => data.text())
    .then((text) => console.log(`${type}: ${text}`));
}
