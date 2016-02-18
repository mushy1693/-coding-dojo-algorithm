function unique(word){
  var newWord = '' + word[0];
  var check = true;
  for (var i = 1; i < word.length; i++) {
    for (var j = 0; j < newWord.length; j++) {
      if (word[i] == newWord[j]) {
        check = false;
      }
    }
    if (check == true) {
      newWord += word[i];
    }
    check = true;
  }
  return newWord;
}

var newWord = unique("Mississippi");
console.log(newWord);
