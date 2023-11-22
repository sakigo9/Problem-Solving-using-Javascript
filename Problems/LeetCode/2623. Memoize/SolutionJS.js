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

// Case 1 : Addition
let checkCalls=0; // to check number of times this function is called
function sum(a,b){
    checkCalls+=1;
    return a+b;
}

let instance=memoize(sum);
instance(2,3);

// Case 2: factorial

function factorail(n){
    checkCalls+=1;
    if(n==0 || n==1){
        return 1
    }
    return n * factorail(n-1);
}

let instance2 = memoize(factorail);
instance2(7);