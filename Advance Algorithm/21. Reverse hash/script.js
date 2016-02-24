function reverseHash(hash){

  newHash = {};

  for(var key in hash){
    for(var i = 0 ; i < hash[key].length ; i++){
      var getKey = hash[key][i];
      newHash[getKey] = key;
    }
  }

  return newHash;

}

var newHash = reverseHash({a : ['b', 'c'], d : ['e', 'f']});
console.log(newHash);
