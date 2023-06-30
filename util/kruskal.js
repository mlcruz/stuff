class UnionFind {
  constructor(size) {
    this.cjt = [];
    this.n = [];

    for (let i = 0; i < size; i++) {
      this.cjt[i] = i;
      this.n[i] = 1;
    }
  }

  find(i) {
    if (i !== this.cjt[i]) {
      this.cjt[i] = this.find(this.cjt[i]);
    }
    return this.cjt[i];
  }

  union(i, j) {
    const si = this.find(i);
    const sj = this.find(j);

    if (si !== sj) {
      if (this.n[si] >= this.n[sj]) {
        this.cjt[sj] = si;
        this.n[si] += this.n[sj];
      } else {
        this.cjt[si] = sj;
        this.n[sj] += this.n[si];
      }
    }
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
    this.nodeEdges = {};
  }

  addNode(key, value) {
    this.nodes.set(key, value);
    this.nodeEdges[key] = [];
  }

  addEdge(src, dest, weight) {
    this.edges.push({ src, dest, weight });
    this.nodeEdges[src].push(dest);
  }

  getNode(key) {
    return this.nodes.get(key);
  }

  getNodeEdges(key) {
    return this.nodeEdges.get(key);
  }

  size() {
    return this.nodes.size;
  }
}

function kruskal(graph) {
  // ordena por peso, evita heap
  const edges = graph.edges.sort((a, b) => a.weight - b.weight);
  const union = new UnionFind(graph.size());
  const msp = [];

  for (const edge of edges) {
    if (union.find(edge.src) !== union.find(edge.dest)) {
      msp.push(edge);
      union.union(edge.src, edge.dest);
    }
  }

  const mspGraph = new Graph();

  const nodes = new Set();
  const mspEdges = [];
  msp.forEach((n) => {
    nodes.add(n.src);
    mspEdges.push([n.src, n.dest, n.weight]);
  });

  nodes.forEach((n) => {
    mspGraph.addNode(n);
  });

  mspEdges.forEach(([src, dest, w]) => {
    mspGraph.addEdge(src, dest, w);
  });

  return mspGraph;
}

function test() {
  // Example usage:
  const graph = new Graph();

  graph.addNode(1, {});
  graph.addNode(2, {});
  graph.addNode(3, {});
  graph.addNode(4, {});
  graph.addNode(5, {});
  graph.addNode(6, {});

  graph.addEdge(1, 2, 4);
  graph.addEdge(1, 3, 2);
  graph.addEdge(2, 5, 3);
  graph.addEdge(3, 4, 2);
  graph.addEdge(3, 6, 4);
  graph.addEdge(4, 5, 3);
  graph.addEdge(4, 6, 1);
  graph.addEdge(5, 6, 1);

  const msp = kruskal(graph);

  for (const edge of msp.edges) {
    console.log(edge);
  }
}

test();
