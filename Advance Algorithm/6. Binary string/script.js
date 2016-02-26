function getPower(number){
  return Math.pow(2,number);
}

function generateBinary(number){
  var binaryString = [];

  return binaryString;
}

function binaryString(number){
  /*
  console.log(8 % 2);
  console.log(7 % 2);
  console.log(6 % 2);
  console.log(5 % 2);
  console.log(4 % 2);
  console.log(3 % 2);
  console.log(2 % 2);
  console.log(1 % 2);
  console.log();
  console.log(Math.floor(8 / 2));
  console.log(Math.floor(7 / 2));
  console.log(Math.floor(6 / 2));
  console.log(Math.floor(5 / 2));
  console.log(Math.floor(4 / 2));
  console.log(Math.floor(3 / 2));
  console.log(Math.floor(2 / 2));
  console.log(Math.floor(1 / 2));
  */
  var allBinary = [];
  var totalPower = getPower(number);
  for (var i = 1; i <= totalPower; i++) {
    allBinary.push(generateBinary(i));
  }
  console.log(allBinary);
}

var newArray = binaryString(1);
console.log(newArray);
