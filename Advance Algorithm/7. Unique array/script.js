function uniqueArray(array){

  var newArray = [];
  var check = true;
  if (array.length > 0) {
    newArray.push(array[0]);
  }else{
    return array;
  }

  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (array[i] == newArray[j]) {
        check = true;
        break;
      }else{
        check = false;
      }
    }
    if(check == false){
      newArray.push(array[i]);
      check = true;
    }
  }

  return newArray;

}

var newArray = uniqueArray(["cat", "cat", "dog", "bird", "dog"]);
console.log(newArray);
