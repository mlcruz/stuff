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
        this.n[si] += n[sj];
      } else {
        this.cjt[si] = sj;
        this.n[sj] += n[si];
      }
    }
  }
}
