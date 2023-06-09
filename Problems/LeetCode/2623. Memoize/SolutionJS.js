function memoize(fn) {
    const cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        const result = fn.apply(this, args); // fn(...args) also works well
        cache[key]=result
        return result
    }
}