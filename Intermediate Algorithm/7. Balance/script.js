function balance(array){
  var leftSum = 0;
  var rightSum = 0;

  for (var i = 0; i < array.length - 1; i++) { // loop through array
    for (var a = 0; a <= i; a++) {  // Add left side
      leftSum += array[a];
    }
    for (var a = i + 1; a < array.length; a++) { // Add right side
      rightSum += array[a];
    }
    if (leftSum != rightSum) {  // if the leftSum and rightSum are not equal move to next number
      leftSum = 0;
      rightSum = 0;
    }else { // print out the balance
      var left = "Left: ";
      var right = "Right: ";
      for (var a = 0; a <= i; a++) {
        left += array[a] + ' ';
      }
      for (var a = i + 1; a < array.length; a++) {
        right += array[a] + ' ';
      }
      console.log(left);
      console.log(right);
    }
  }
}

balance([7,2,4,10,3]);
