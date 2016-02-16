function reverseArray(array){
  for (var i = 0; i < array.length; i++) {
    if(i > array.length / 2 - 1){
      break;
    }else {
      var number = array[i];
      array[i] = array[array.length - i - 1];
      array[array.length - i - 1] = number;
    }
  }
  return array;
}

var newArray = reverseArray([-3,5,1,3,2,10]);
console.log(newArray);
