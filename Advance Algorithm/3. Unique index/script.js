function uniqueIndex(word){
  var index;
  for (var i = 0; i < word.length; i++) {
    var check = true;
    for (var j = 0; j < word.length; j++) {
      if (word[i] == word[j] && i != j) {
        check = false;
        break;
      }
    }
    if (check) {
      index = i;
      break;
    }
  }
  return index;
}

var index = uniqueIndex("google");
console.log(index);
