function randomArray(){
  var newArray = [];
  for (var i = 0; i < 10; i++) {
    newArray.push(Math.floor(Math.random()* 100) + 1);
  }
  return newArray;
}

var newArray = randomArray();
console.log(newArray);
