
var sortBy = function(arr, fn) {
 return sortedArr=arr.sort((a,b)=>{return fn(a)-fn(b)})
  };