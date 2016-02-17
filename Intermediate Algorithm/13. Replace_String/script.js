function replaceString(search, replace, sentence){
  var word = '';
  var index;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] == search[0]) {
      for (var x = i; x < i + search.length; x++) {
        word += sentence[x];
      }
      if(check(search, word) == true){
        index = i;
        var newSentence = replaceWord(index, search, replace, sentence);
      }
    }
  }
}

function check(search, word){
  for (var i = 0; i < search.length; i++) {
    if (search[i] != word[i]) {
      return false;
    }
  }
  return true;
}

function replaceWord(index, search, replace, sentence){
  console.log(index);
  console.log(replace);
  console.log(sentence);
}

replaceString("Microsoft", "CodingDojo", "Visit Microsoft!");
