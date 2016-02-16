function swap(array){
  var first = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = first;
  return array;
}

var newArray = swap([2, 3, 5, 7, 6]);
console.log(newArray);
