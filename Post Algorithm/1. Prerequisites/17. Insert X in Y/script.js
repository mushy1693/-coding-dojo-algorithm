function insert(array, number, index){
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i == index) {
      newArray.push(number);
      newArray.push(array[i]);
    }else{
      newArray.push(array[i]);
    }
  }
  return newArray;
}

var newArray = insert([1, 3, 5, 7], 10, 2);
console.log(newArray);
