function flatten(array){
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      newArray.push(array[i][j]);
    }
  }
  return newArray;
}

var newArray = flatten([[1,2,3],[4,5,6],[7,8,9]]);
console.log(newArray);
