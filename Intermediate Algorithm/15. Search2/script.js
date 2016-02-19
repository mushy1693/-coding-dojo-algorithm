function search2(search, sentence){
  var word = '';
  var index;
  for (var i = 0; i < sentence.length; i++) { // loop through the sentence
    if (sentence[i] == search[0]) { // check to see if the first letter of the search word match the first sited letter
      for (var x = i; x < i + search.length; x++) { // obtain the string to compare
        word += sentence[x];
      }
      if(check(search, word) == true){  // if check is true run this code block
        return i;
      }else{  // if word is not the same empty word counter and continue looping through the sentence
        word = '';
      }
    }
  }
  return -1;
}

function check(search, word){
  for (var i = 0; i < search.length; i++) {
    if (search[i] != word[i]) {
      return false;
    }
  }
  return true;
}

var getIndex = search2("W3Schools", "Visit W3Schools!");
console.log(getIndex);
