//* QUEUE   *//
//Functions : EMPTY, ENQUEUE, DEQUEUE, FRONT, SIZE

function Queue() {
  this.collection = [];

  //EMPTY
  this.isEmpty = () => {
    return this.collection.length === 0;
  };
  //ENQUEUE at the end O(1)
  this.enqueue = element => {
    this.collection.push(element);
  };

  //DEQUEUE from top O(1)
  this.dequeue = () => {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.collection.shift();
  };

  //FRONT Return the topmost element  O(1)
  this.front = () => {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.collection[0];
  };

  //LENGTH Returns the length of queue
  this.size = () => {
    return this.collection.length;
  };

  //RETURN The Queue O(N)
  this.print = () => {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.collection;
  };
}

let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
console.log("Front", myQueue.front());
console.log("Size", myQueue.size());
console.log(myQueue.print());
myQueue.dequeue();
myQueue.dequeue();
console.log("Front", myQueue.front());
console.log("Size", myQueue.size());
console.log(myQueue.print());
