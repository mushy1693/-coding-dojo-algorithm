function numToString(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 'Dojo';
    }
  }
  return array;
}

console.log(numToString([-1, -3, 2]));
