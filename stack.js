//* STACKS *//
//Functions : push,pop,length,peek

function Stack() {
  this.collection = [];

  //Push
  this.push = element => {
    this.collection.unshift(element);
  };

  //Pop
  this.pop = () => {
    if (this.collection.length === 0) {
      return undefined;
    }
    let result = this.collection[this.collection.length - 1];
    this.collection.length -= 1;
    return result;
  };

  //Length
  this.length = () => {
    return length(this.collection);
  };
  //PEEK
  this.peek = () => {
    if (this.collection.length === 0) {
      return "Array is Empty";
    }
    return this.collection[this.collection.length - 1];
  };
}

let newStack = new Stack();
newStack.push(5);
newStack.push(8);
newStack.push(70);
newStack.push(20);
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
// newStack.pop();
// console.log(newStack.peek());
console.log(newStack);
