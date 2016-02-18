function fibonacci(){
  var num1 = 0;
  var num2 = 1;
  var sum = 0;

  while (num2 < 4000000) {
    var temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    if (num2 % 2 == 0 && num2 < 4000000) {
      sum += num2;
    }
  }
  console.log(sum);
}

fibonacci();
