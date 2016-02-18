function substr2(sentence, start, end){
  var newString = '';
  var temp;
  if (end < start) {  // check if end is smaller than start swap if true
    temp = start;
    start = end;
    end = temp;
  }
  if (start < 0 ) { // change start to 0 if less than 0
    start = 0;
  }
  for (var i = start; i < end; i++) { // get substr
    newString += sentence[i];
  }
  return newString;
}

var newString = substr2("Hello world!", 1, 4);
console.log(newString);
