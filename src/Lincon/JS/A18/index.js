// Importo la función buildGraph del módulo ./graph
const { buildGraph } = require("./graph");

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Toñwn Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

// Usa la función buildGraph para construir el gráfico
const roadGraph = buildGraph(roads.map((r) => r.split("-")));

// Muestra la estructura de datos del gráfico en la consola
console.log(roadGraph);
