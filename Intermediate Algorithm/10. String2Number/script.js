function String2Number(string){
  var sum = 0;
  for (var i = 0; i < string.length; i++) {
    if (isNaN(string[i]) == false) {
      sum += Number(string[i]);
    }
  }
  return sum;
}

var number = String2Number('a3b6c9');
console.log(number);
