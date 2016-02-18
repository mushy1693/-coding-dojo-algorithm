function slice2(array, start, end){
  var newArray = [];
  for (var i = start; i < end; i++) {
    newArray.push(array[i]);
  }
  return newArray
}

var newArray = slice2(["Banana", "Orange", "Lemon", "Apple", "Mango"], 0, 3);
console.log(newArray);
