function memoize(fn) {
    let cashe=new Map();      
    let count=0;
    return function(...args) {
      let key=JSON.stringify(args)
        if(cashe.has(key)){
          return cashe.get(key)
        }
      else{
        let result =fn(...args)
        cashe.set(key,result)
        count++
        return result
      }
}
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */