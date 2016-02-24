function unsortedArray(array){
  if(array.length % 2 == 0){
    return (array[Math.floor(array.length / 2 - 1)] + array[Math.floor(array.length / 2)]) / 2;
  }else{
    return array[Math.floor(array.length / 2)];
  }
}

var median = unsortedArray([9,2,7,8,3,4]);
console.log(median);
