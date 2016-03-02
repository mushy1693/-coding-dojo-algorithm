function getPower(number){  // get the power of a number
  return Math.pow(2,number);
}

function generateBinary(number, power){
  var item = '';
  var num = number;
  while(num != 0){  // store binary into num
    item += (num % 2);
    num = Math.floor(num / 2);
  }
  if (num == 0) { // attach extra 0's to the binary if its shorter than the power
    while (item.length < power) {
      item += '0';
    }
  }
  return item;  // return the binary number
}

function getAllZero(number){
  var allZero = '';
  for (var i = 0; i < number; i++) {
    allZero += '0';
  }
  return allZero;
}

function getAllBinary(binaryArray, number){
  var allBinary = binaryArray;
  for (var i = 1; i < getPower(number); i++) {  // get all the binary
    allBinary.push(generateBinary(i, number));
  }
  return binaryArray;
}

function binaryString(number){

  var allBinary = [];

  allBinary.push(getAllZero(number));  // push the binary with all zero into the array
  allBinary = getAllBinary(allBinary, number);  // get all the binary

  console.log(allBinary);
}

var newArray = binaryString(4);
console.log(newArray);
