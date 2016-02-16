function square(array){
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
  }
  return newArray;
}

var squaredArray = square([1,5, 10, -2]);
console.log(squaredArray);
