function bubbleSort(array){
  var newArray = array.slice();
  for (var i = 0; i < newArray.length - 1; i++) {
    var temp;
    for (var j = i; j < newArray.length - 1; j++) {
      if(newArray[j] > newArray[j+1]){
        temp = newArray[j];
        newArray[j] = newArray[j+1];
        newArray[j+1] = temp;
      }
    }
  }
  return newArray;
}

var sorted = bubbleSort([3,1,2,7,6,9,8]);
console.log(sorted);
