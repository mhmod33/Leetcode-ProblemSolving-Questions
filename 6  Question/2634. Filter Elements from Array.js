var filter=function(arr,fn){

    let result=[];
    for (let i=0; i<arr.length;i++){
        let newArr=fn(arr[i],i);
        if(newArr){
            result.push(arr[i])
        }
    }
    return result
}
