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
