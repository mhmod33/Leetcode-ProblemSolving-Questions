
var promiseAll = function(functions) {
  let functionsLength=functions.length;
  let result=[];
    return new Promise((resolve,reject)=>{
        
        functions.forEach((func,index)=>{
            func().then((data)=>{
                result[index]=data;
                functionsLength--;

            if(functionsLength==0){
                resolve(result)
            }
            }).catch(error=>{reject(error)})
        })
    })
};
