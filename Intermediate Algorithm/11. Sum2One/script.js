function sum2One(number){
  var sum = getSum(number);
  while(sum >= 10){
    sum = getSum(sum);
  }
  return sum;
}

function getSum(number){
  number += '';
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  return sum;
}

var number = sum2One(735);
console.log(number);
