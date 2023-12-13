// estoy importando la función buildGraph del módulo "graph"
const { buildGraph } = require("../Roads module/graph");

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

// aqui estoy utilizando la funcion buildGrad para construir el grafo
// al igual que exporto ese resultado de la funcion buildGraph, como roadGraph
exports.roadGraph = buildGraph(roads);
