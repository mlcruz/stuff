// Grafo com pesos usando matriz de adjacencia
class WeightedGraph {
  constructor() {
    this.nodes = new Map();
    this.edges = {};
  }

  addNode(key, value) {
    this.nodes.set(key, value);
    this.edges[key] = {};
  }

  addEdge(node1, node2, weight) {
    this.edges[node1][node2] = weight;
    this.edges[node2][node1] = weight;
  }

  getNode(key) {
    return this.nodes.get(key);
  }
}

//   shortestPath(startNode, endNode) {
//     const { distances, previous } = this.dijkstra(startNode);

//     const path = [];
//     let currentNode = endNode;

//     while (currentNode !== null) {
//       path.unshift(currentNode);
//       currentNode = previous[currentNode];
//     }

//     const distance = distances[endNode];
//     return { path, distance };
//   }
