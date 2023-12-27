let urlLink = "https://eloquentjavascript.net/author";

let media = [
  "text/plain",
  "text/html",
  "application/json",
  "application/rainbow+unicorns",
];

async function getResponsesForMediaType(url, type) {
  let response = await fetch(url, { headers: { accept: type } });

  let responseBody = await response.text();

  // Imprimir en la consola el tipo de medio y el cuerpo de la respuesta
  console.log(`\n---- type: ${type} ----\n`, responseBody);
}

for (let type of media) {
  getResponsesForMediaType(urlLink, type);
}
