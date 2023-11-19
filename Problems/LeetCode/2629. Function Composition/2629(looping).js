var compose = function(functions) {

    if(functions.length===0) return function(x){
        return x;
    }
	return function(x) {
        let local=x;
        for(let i=functions.length-1;i>=0;i--){
              console.log(i)
              local=functions[i](local)
        }
        return local
    }
};
let operations=[x=>x+1,x=>x*x]
let instance=compose(operations);
console.log(instance(4))