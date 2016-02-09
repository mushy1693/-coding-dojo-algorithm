function addVal(){

  var sum = 0;

  for(var x = 100 ; x <= 4000000 ; x++){
    if (x % 3 === 0) {
      sum += x;
      continue;
    }
    if (x % 5 === 0) {
      sum += x;
      continue;
    }
  }

  return sum;

}

var num = addVal();
console.log(num);
