

var filter = function(arr, fn) {
    return arr.reduce((result,element,index)=>{
        if(fn(element,index)){
            result.push(element)
        }
        return result
    },[])
};