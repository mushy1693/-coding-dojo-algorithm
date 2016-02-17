function lastNumber(input){
  var number1 = Number(input[0]);
  var number2 = Number(input[1]);
  var squared = 1;
  for (var i = 0; i < number2; i++) {
    squared *= number1;
  }
  squared += "";
  return squared[squared.length - 1];
}

var num = lastNumber("37");
console.log(num);
