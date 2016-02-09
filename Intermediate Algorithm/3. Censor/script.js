function Censor(word, string){

  var newString = '';
  var replaceString = '';
  var rand = Math.floor(Math.random() * 10) + 1;

  for(var x = 0 ; x < word.length ; x++){
    switch (rand) {
      case 1:
        replaceString += '!';
        break;
      case 2:
        replaceString += '@';
        break;
      case 3:
        replaceString += '#';
        break;
      case 4:
        replaceString += '$$';
        break;
      case 5:
        replaceString += '%';
        break;
      case 6:
        replaceString += '^';
        break;
      case 7:
        replaceString += '&';
        break;
      case 8:
        replaceString += '*';
        break;
      case 9:
        replaceString += '(';
        break;
      case 10:
        replaceString += ')';
        break;
    }
    var rand = Math.floor(Math.random() * 10) + 1;
  }

  newString = string.replace(new RegExp(word,'g'), replaceString);
  return newString;

}

var string = Censor('damn', 'Omg damn so smart, damn !');
console.log(string);
