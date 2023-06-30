class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(value, score) {
    const item = { value, score };
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.swap(0, this.heap.length - 1);
    const removedItem = this.heap.pop();
    this.bubbleDown(0);
    return removedItem.value;
  }

  peek() {
    return this.heap[this.heap.length - 1];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (
      parentIndex >= 0 &&
      this.heap[parentIndex].score > this.heap[index].score
    ) {
      this.swap(parentIndex, index);
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallestChildIndex = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex].score < this.heap[smallestChildIndex].score
    ) {
      smallestChildIndex = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex].score < this.heap[smallestChildIndex].score
    ) {
      smallestChildIndex = rightIndex;
    }

    if (smallestChildIndex !== index) {
      this.swap(smallestChildIndex, index);
      this.bubbleDown(smallestChildIndex);
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

function test() {
  let q = new PriorityQueue();

  q.push("a", 1);
  q.push("b", 2);
  q.push("d", 5);
  q.push("c", 3);

  console.log(q.pop());
  console.log(q.pop());
  console.log(q.pop());
  console.log(q.pop());
}

test();
