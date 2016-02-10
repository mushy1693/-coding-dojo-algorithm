function arrayToHash(arr1, arr2){

  var hash = {};

  for(var x = 0 ; x < arr1.length ; x++){
    hash[arr1[x]] = arr2[x];
  }

  return hash;

}

var hash = arrayToHash([1,2,3],['a','b','c']);
console.log(hash);
