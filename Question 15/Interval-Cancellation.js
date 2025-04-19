
var cancellable = function(fn, args, t) {
    fn(...args)
let Interval=setInterval(()=>{
  fn(...args)
},t)

return function cancelFn (){
  clearInterval(Interval)
}
  
};
