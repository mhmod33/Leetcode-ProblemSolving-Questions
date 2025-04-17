var reduce = function(nums, fn, init) {
   let val;
   for (let i=0; i<nums.length; i++){
    if (nums.length==0){
      val=init
    }
     else{
     val=fn(init,nums[i]);
     init=val
     }
   }
   return init
};
