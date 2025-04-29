
var join = function(arr1, arr2) {
    const map = {} ;
    for(let x of arr1){
        if(!map[x.id]) map[x.id] = x ;
        else map[x.id] = {...map[x.id],...x} ;
    }
    for(let x of arr2){
        if(!map[x.id]) map[x.id] = x ;
        else map[x.id] = {...map[x.id],...x} ;
    }
    return Object.values(map) ;
};