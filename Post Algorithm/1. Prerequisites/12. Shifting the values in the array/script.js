function shift(array){
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(0);
  return newArray;
}

var newArray = shift([1,5, 10, 7, -2]);
