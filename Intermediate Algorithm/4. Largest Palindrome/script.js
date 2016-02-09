function check(word){

  for(var x = 0 ; x < word.length ; x++){
    if (word[x] !== word[word.length - 1 - x]) {
      return false;
    }
  }

  return true;

}

function palindrome(sentence){

  var words = sentence.split(' ');
  var count = 0;
  var word = '';

  for(var x = 0 ; x < words.length ; x++){
    var result = check(words[x]);
    if (result === true && words[x].length > count) {
      word = words[x];
      count = words[x].length;
    }
  }

  return word;

}

var word = palindrome("wow omg I civic love");
console.log(word);
