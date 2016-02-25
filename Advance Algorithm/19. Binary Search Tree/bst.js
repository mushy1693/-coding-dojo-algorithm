function node(number){
  this.data = number;
  this.left = null;
  this.right = null;
}

function BST(){

  this.node = null;

}

BST.prototype.getNode = function(){
  return this.node;
}

BST.prototype.add = function(number){

  var counter = true;
  var nodeTrack = this.node;

  if (this.node == null) {  // check if node is null if it is set it equal to a new node
    this.node = new node(number);
  }else{
    while (counter == true) { // keep looping until we have added a the new node
      if (number > nodeTrack.data) {  // check if number is bigger than current node
        if (nodeTrack.right == null) {  // check if the current right node is null so we can attach the new node
          nodeTrack.right = new node(number);
          counter = false;
        }else {
          nodeTrack = nodeTrack.right;  // if the node is taken add the next right node to replace the current nodeTrack
        }
      }
      if (number < nodeTrack.data) {  // check if number is smaller than current node
        if (nodeTrack.left == null) { // check if the current left node is null so we can attach the new node
          nodeTrack.left = new node(number);
          counter = false;
        }else {
          nodeTrack = nodeTrack.left;   // if the node is taken add the next left node to replace the current nodeTrack
        }
      }
    }
  }

}

BST.prototype.contains = function(number){

  var nodeTrack = this.node;

  while(nodeTrack != null){ // keep looping the the node is not null
    if (nodeTrack.data == number) { // if the one of the node contains the number return true
      return true;
    }else if(number > nodeTrack.data){  // move to the right node
      nodeTrack = nodeTrack.right;
    }else if(number < nodeTrack.data){  // move to the left node
      nodeTrack = nodeTrack.left;
    }
  }

  return false; // return false if number not found
}

BST.prototype.remove = function(){  // remove the desired node
  // remove a node with no leaf or 1 leaf attached is not hard. Implementation will come soon
  // removing a node with two leaf nodes are complicated and needs to rebalance the tree.
}

BST.prototype.toArray = function(node){ // traverse through all the node and get all the numbers in a array format.
  var traverseArray = [];

  if (node.data != null) {
    if(node.left != null){
      traverseArray = traverseArray.concat(this.toArray(node.left));
    }
    traverseArray.push(node.data);
    if (node.right != null) {
      traverseArray = traverseArray.concat(this.toArray(node.right));
    }
  }

  return traverseArray;
}

BST.prototype.toString = function(node, line){  // traverse through all the node and get all the numbers in a string format.
  var line = '';

  if (node.data != null) {
    if(node.left != null){
      line += this.toString(node.left, line);
    }
    line += node.data + ' ';
    if (node.right != null) {
      line += this.toString(node.right, line);
    }
  }

  return line;
}

BST.prototype.size = function(node){  // traverse through all the nodes and get the total size

  var totalSize = 0;

  if (node.data != null) {
    totalSize += 1;
    if(node.left != null){
      totalSize += this.size(node.left);
    }
    if (node.right != null) {
      totalSize += this.size(node.right);
    }
  }

  return totalSize;
}

BST.prototype.traverse = function(node){  // traverse through all the nodes and logs it out
  if (node.data != null) {
    if(node.left != null){
      this.traverse(node.left);
    }
    console.log(node.data);
    if (node.right != null) {
      this.traverse(node.right);
    }
  }
}
