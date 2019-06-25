class Heap {
  constructor(capacity) {
    this.heap = [];
    this.capacity = capacity;
    this.size = 0;
  }
  insert(data) {
    if (this.heap.length == this.capacity) {
      return;
    }
    this.heap[this.size] = data;
    this.size += 1;
    this.fixUp(this.size - 1);
  }
  fixUp(index) {
    let parent = parseInt(index / 2);
    if (index > 0 && this.heap[parent] > this.heap[parent]) {
      this.swap(index, parent);
      this.fixUp(parent);
    }
  }
  swap(index, parent) {
    let data = this.heap[index];
    this.heap[index] = this.heap[parent];
    this.heap[parent] = data;
  }
}
let heap = new Heap(10);
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(50);
heap.insert(15);
heap.insert(7);
heap.insert(8);
heap.insert(13);
console.log(heap);
