function maxMinAvg(array){
  var max = array[0];
  var min = array[0];
  var sum = 0;

  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
    sum += array[i];
  }

  console.log("Max: " + max + ", Min: " + min + ", and Average:" + (sum / array.length));
}

maxMinAvg([1,5, 10, -2]);
