var TimeLimitedCache = function() {
    this.cache=new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let cacheVal=this.cache.get(key);
    if(cacheVal){clearTimeout(cacheVal.timeout)}

    let timeout=setTimeout(()=>{this.cache.delete(key)},duration)
    this.cache.set(key,{value,timeout})

    return Boolean(cacheVal)
};


TimeLimitedCache.prototype.get = function(key) {
    return this.cache.get(key) ? this.cache.get(key).value : -1
};

TimeLimitedCache.prototype.count = function() {
   return this.cache.size
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */