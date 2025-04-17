var createCounter = function(init) {
    let Init=init
    return{
        increment(){
            init++
            return init 
        },
        reset(){
            return init=Init
        },
        decrement(){
            init-- 
            return init
        },
    }
};

