function memoize(fn: Fn): Fn {
    let cache:object={};
    return function(...args) {
        let key:string=String(args);
        if(key in cache){
             return cache[key];
        }
        let result:Fn=fn.apply(this,args);
        cache[key]=result;
        return result
    }
}