function split2(separator, sentence){
  var newArray = [];
  var word = '';
  if (separator == "") {
    for (var i = 0; i < sentence.length; i++) {
      newArray.push(sentence[i]);
    }
  }else {
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i] != separator) {
        word += sentence[i];
      }else {
        newArray.push(word);
        word = '';
      }

      if (i == sentence.length - 1) {
        newArray.push(word);
      }
    }
  }
  return newArray;
}

var newArray = split2(" ", "How are you doing today?");
console.log(newArray);
