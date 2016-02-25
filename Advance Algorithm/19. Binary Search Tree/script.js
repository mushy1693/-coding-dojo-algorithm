function main(){
  var items = new BST();
  items.add(31);
  items.add(7);
  items.add(3);
  items.add(20);
  items.add(8);
  items.add(60);
  items.add(32);
  console.log(items.node);
  console.log(items);
  items.traverse(items.getNode());
  console.log(items.toArray(items.getNode()));
  console.log(items.size(items.getNode()));
  items.traverse(items.getNode());
  console.log(items.toString(items.getNode()));
}

main();
