function removeNeg(array){
  for (var i = 0; i < array.length; i++) {
    var number;
    if (array[i] < 0) {
      number = array[i];
      array[i] = array[array.length - 1];
      array[array.length - 1] = number;
      array.pop();
    }
  }
  return array;
}

var newArray = removeNeg([-3,5,-1,3,2,10]);
console.log(newArray);
