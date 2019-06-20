//* STACKS *//
//Functions : EMPTY, PUSH, POP, PEEK ,SIZE

function Stack() {
  this.collection = [];

  //EMPTY
  this.isEmpty = () => {
    return this.collection.length === 0;
  };

  //PUSH
  this.push = element => {
    this.collection.unshift(element);
  };

  //POP
  this.pop = () => {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.collection[this.collection.length - 1];
    this.collection.length -= 1;
    return result;
  };

  //LENGTH
  this.length = () => {
    return this.collection.length;
  };

  //PEEK
  this.peek = () => {
    if (this.isEmpty()) {
      return "Array is Empty";
    }
    return this.collection[this.collection.length - 1];
  };
  
  //RETURN THE STACK
  this.print = () => {
    return this.collection;
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
