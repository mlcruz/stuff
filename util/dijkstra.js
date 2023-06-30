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

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  push(element, score) {
    this.queue.push({ element, score });
    this.sort();
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  sort() {
    this.queue.sort((a, b) => a.score - b.score);
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }
}

function dijkstra(start, graph) {
  const dist = {};
  const visited = {};
  const prev = {};

  const queue = new PriorityQueue();

  for (const node of graph.nodes.keys()) {
    dist[node] = Infinity;
    visited[node] = false;
    prev[node] = null;
  }

  dist[start] = 0;
  queue.push(start, 0);

  while (!queue.isEmpty()) {
    const curr = queue.pop();
    visited[curr] = true;

    for (const neighbor in graph.edges[curr]) {
      const weight = graph.edges[curr][neighbor];
      const totalWeight = dist[curr] + weight;

      if (totalWeight < dist[neighbor]) {
        dist[neighbor] = totalWeight;
        prev[neighbor] = curr;
      }

      if (!visited[neighbor]) {
        queue.push(neighbor, dist[neighbor]);
      }
    }
  }

  return { distances: dist, previous: prev };
}

function shortestPath(start, end, graph) {
  const { distances, previous } = dijkstra(start, graph);

  const path = [];
  let curr = end;

  while (curr !== null) {
    path.unshift(curr);
    curr = previous[curr];
  }

  const dist = distances[end];
  return { path, dist };
}

function test() {
  const graph = new WeightedGraph();
  graph.addNode("A", {});
  graph.addNode("B", {});
  graph.addNode("C", {});
  graph.addNode("D", {});
  graph.addNode("E", {});
  graph.addNode("F", {});

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "E", 3);
  graph.addEdge("C", "D", 2);
  graph.addEdge("C", "F", 4);
  graph.addEdge("D", "E", 3);
  graph.addEdge("D", "F", 1);
  graph.addEdge("E", "F", 1);

  console.log(dijkstra("A", graph));
  console.log(shortestPath("A", "E", graph));
}

test();
