function greater(array, number){
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > number) {
      count++;
    }
  }
  console.log(count);
}

greater([1,3, 5, 7], 3);
