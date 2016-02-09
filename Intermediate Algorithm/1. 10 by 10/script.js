function create10By10(){

  var rand = Math.round(Math.random());
  var num = [];

  for(var x = 1 ; x <= 100 ; x++){
    if (rand === 1) {
      num.push("D");
    }else {
      num.push("E");
    }
    rand = Math.round(Math.random());
  }

  return num;

}

var array = create10By10();
console.log(array);
