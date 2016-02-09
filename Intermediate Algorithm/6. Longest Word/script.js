function longestWord(sentence){

  var words = sentence.split(' ');
  var count = 0;
  var word = '';

  for(var x = 0 ; x < words.length ; x++){
     if(words[x].length > count){
       count = words[x].length;
       word = words[x];
     }
  }

  return word;

}

var word = longestWord("Coding Dojo rocks");
console.log('the longest word is ' + word);
