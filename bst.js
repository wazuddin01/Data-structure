//* BST   *//
//Functions : ADD, DELETE, SEARCH, MIN VALUE, MAX VALUE

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  //Function to insert new Node
  insert(data) {
    let node = new Node(data);
    if (this.root == null) {
      this.root = node;
    }
    this.insertNode(this.root, node);
  }
  //Helper Function for Insert Node
  insertNode(node, newNode) {
    //if node data is greater than newNode data
    if (node.data > newNode.data) {
      //if left child of node is null then insert newNode at node.left
      if (node.left == null) {
        node.left = newNode;
      }
      //Calling recursively insertNode on left child of node
      this.insertNode(node.left, newNode);
    }
    //if node data is smaller than newNode data
    else if (node.data < newNode.data) {
      //if right child of node is null then insert newNode at node.right
      if (node.right == null) {
        node.right = newNode;
      }
      //Calling recursively insertNode on right child of node
      this.insertNode(node.right, newNode);
    }
  }
  //Function to remove Node
  remove(data) {
    if (this.root != null) {
      this.root = this.removeNode(data, this.root);
    }
  }
  //Helper function to remove Node
  removeNode(data, node) {
    if (node == null) {
      return node;
    }
    //If Data is less than node.data then search for key in left node
    else if (data < node.data) {
      node.left = this.removeNode(data, node.left);
    }
    //If Data is greater than node.data then search for key in right node
    else if (data > node.data) {
      node.right = this.removeNode(data, node.right);
    } //If key is found to delete
    else {
      // Deleting Leaf Node
      if (node.left == null && node.right == null) {
        console.log("Deleting Leaf Node");
        return null;
      }
      //Deleting node with only right child
      else if (node.left == null) {
        console.log("Deleting node with only right child");
        let tempNode = node.right;
        return tempNode;
      }
      // Deleting node with only left child
      else if (node.right == null) {
        console.log("Deleting node with only left child");
        let tempNode = node.left;
        return tempNode;
      }
      // Deleting node with both child
      else {
        console.log("Deleting node with both child");
        let tempNode = this.findMax(node.left);
        node.data = tempNode.data;
        node.left = this.removeNode(tempNode.data, node.left);
        return node;
      }
    }
    return node;
  }
  //Search a value in the Node
  search(data, node) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(data, node.left);
    } else if (data > node.data) {
      return this.search(data, node.right);
    } else {
      return node;
    }
  }
  //Return root of the Node
  getRoot() {
    return this.root;
  }
  //Find the Minimum Node in the tree which is the left most node
  findMin(node) {
    if (node.left == null) {
      return node;
    }
    return this.findMin(node.left);
  }
  //Find the Maximum Node in the tree which is the rightmost Node
  findMax(node) {
    if (node.right === null) {
      return node;
    }
    return this.findMax(node.right);
  }
  //Traversing the tree
  inorderPrint(node) {
    if (node != null) {
      this.inorderPrint(node.left);
      console.log(node.data);
      this.inorderPrint(node.right);
    }
  }
  //Postorder traversal
  postorderPrint(node) {
    if (node != null) {
      console.log(node.data);
      this.postorderPrint(node.left);
      this.postorderPrint(node.right);
    }
  }
  //Preorder traversal
  preorderPrint(node) {
    if (node != null) {
      this.preorderPrint(node.left);
      this.preorderPrint(node.right);
      console.log(node.data);
    }
  }
}

let Bst = new BST();

Bst.insert(15);
Bst.insert(25);
Bst.insert(10);
Bst.insert(7);
Bst.insert(22);
Bst.insert(17);
Bst.insert(13);
Bst.insert(5);
Bst.insert(9);
Bst.insert(27);

let root = Bst.getRoot();
console.log(Bst);
Bst.inorderPrint(root);

// Bst.remove(27);
// Bst.remove(15);
// Bst.remove(7);
// Bst.remove(22);
// Bst.remove(25);
Bst.remove(10);
// Bst.remove(13);
// Bst.remove(17);

console.log("");
console.log("root.left", root.left);
console.log("");
console.log("root", root);
console.log("");
console.log("root.right", root.right);

Bst.inorderPrint(root);

console.log("Minimum", Bst.findMin(root));
console.log("Maximum", Bst.findMax(root));

console.log(Bst.search(150000, root));
