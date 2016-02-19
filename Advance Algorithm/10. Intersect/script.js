function intersect(firstArray, secondArray){
  var index1 = 0;
  var index2 = 0;
  var newArray = [];

  while(index1 <= (firstArray.length - 1) && index2 <= (secondArray.length - 1)){
    if (firstArray[index1] > secondArray[index2]) {
      index2++;
    }else if (firstArray[index1] < secondArray[index2]) {
      index1++;
    }else{
      newArray.push(firstArray[index1]);
      index1++;
    }
  }
  return newArray;
}

var newArray = intersect([ 2, 4, 5, 6, 13, 35, 43], [ 1, 3,4,5,18,23,26,43]);
console.log(newArray);
