// replace string function that compares and replaces the word
function replaceString(search, replace, sentence){
  var word = '';
  var index;
  for (var i = 0; i < sentence.length; i++) { // loop through the sentence
    if (sentence[i] == search[0]) { // check to see if the first letter of the search word match the first sited letter
      for (var x = i; x < i + search.length; x++) { // obtain the string to compare
        word += sentence[x];
      }
      if(check(search, word) == true){  // if check is true run this code block
        index = i;
        var newSentence = replaceWord(index, search, replace, sentence);  // replace the word in the sentence
        return newSentence;
      }else{  // if word is not the same empty word counter and continue looping through the sentence
        word = '';
      }
    }
  }
  return sentence;
}

// compare the replace word and the word found in the sentence that might be a match
function check(search, word){
  for (var i = 0; i < search.length; i++) {
    if (search[i] != word[i]) {
      return false;
    }
  }
  return true;
}

// Replace the word in the sentence
function replaceWord(index, search, replace, sentence){
  var newSentence = '';
  for (var i = 0; i < sentence.length; i++) { // loop through the sentence
    if (i < index || i > index + search.length - 1) { // save all the words on the left and right side of the word being replaced
      newSentence += sentence[i];
    }
    if (i == index) { // if the index is the first letter of the search word in the sentence attach the replace word
      newSentence += replace;
    }
  }
  return newSentence;
}

var newSentence = replaceString("Microsoft", "CodingDojo", "Visit Me Microsoft!");
console.log(newSentence);
