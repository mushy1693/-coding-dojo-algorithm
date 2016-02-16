function removeNegative(array){
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      newArray.push(0);
    }else{
      newArray.push(array[i]);
    }
  }
  return newArray;
}

var newArray = removeNegative([1,5, 10, -2]);
console.log(newArray);
