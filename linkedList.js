//*  LINKED LIST  *//
//Functions : ADD, DELETE, LAST NODE,PRINT

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Linked {
  constructor() {
    this.root = null;
  }
  //Insert Data in the linked list
  insert(data) {
    let node = new Node(data);
    //if no element then points root to the new node
    if (this.root == null) {
      this.root = node;
    } else {
      let point = this.root;
      while (point.next != null) {
        point = point.next;
      }
      point.next = node;
    }
  }
  //Remove the Data from list
  remove(data) {
    let point = this.root;
    let prev = null;
    while (point.data != data) {
      prev = point;
      point = point.next;
    }
    prev.next = point.next;
  }
  //Middle linked list element
  middle(node) {
    let point = node;
    let prev = node;
    while (point.next != null && point.next.next != null) {
    //   console.log(point);
      prev = point.next;
      point = point.next.next;
     
    }
    return prev;
  }
  //Traverse the list
  print(node) {
    if (node == null) {
      return;
    }
    console.log(node.data);
    this.print(node.next);
  }
  //Traverse the list Backwards
  printBack(node) {
    if (node == null) {
      return;
    }
    this.print(node.next);
    console.log(node.data);
  }
  //Return the root of the list
  getRoot() {
    return this.root;
  }
}
let list = new Linked();

list.insert(5);
list.insert(10);
list.insert(15);
list.insert(20);
list.insert(55);
list.insert(30);
//console.log("List", list);
let root = list.getRoot();
list.print(root);

console.log("Printing backwards");
list.printBack(root);

// console.log("Removing a Node");
// list.remove(15);
// list.printBack(root);

console.log("Middle Node", list.middle(root));
