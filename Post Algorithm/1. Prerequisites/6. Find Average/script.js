function average(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += i;
  }
  console.log(sum / array.length);
}

average([1,3,5,7,20]);
