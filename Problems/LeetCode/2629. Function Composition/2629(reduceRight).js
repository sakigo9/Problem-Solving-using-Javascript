

var compose = function(functions) {

    if(functions.length===0) return function(x){
        return x;
    }
        return functions.reduceRight((result, ele)=>{
            return function(x){
                return ele(result(x))
            }
        })
};

let operations=[x=>x+1,x=>x*x]
let instance=compose(operations);
console.log(instance(4))