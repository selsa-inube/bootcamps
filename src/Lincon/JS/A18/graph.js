// ./graph

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

// Exporta la función buildGraph
module.exports = { buildGraph };
