
var expect = function(val) {
    let Obj={
        toBe(valTo){
            if(val===valTo) return true;
            else throw new Error("Not Equal");
        },
        notToBe(valNot){
            if(val!==valNot) return true;
            else throw new Error("Equal");
        }
    }

    return Obj;
};


 