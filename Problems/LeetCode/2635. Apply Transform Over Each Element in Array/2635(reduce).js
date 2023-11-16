

var map = function(arr, fn) {
    return arr.reduce((newArr,element,index)=>{
        newArr[index]=fn(element,index);
        return newArr
    },[])
 };