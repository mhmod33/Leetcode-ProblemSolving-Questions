/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
//   obj=[""]; //array
//   obj={name:[{"":""},{}]} //object  
 // obj=[{"":""},{"":""}] //JSON 
 
let objLength=Object.keys(obj).length; 

if(objLength==0)  return true
  else return false
};