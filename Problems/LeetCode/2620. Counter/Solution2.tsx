
function createCounter2(n: number): () => number {
    let local:number=n;
    return function() {
       return local++;
    }
}


/** 
 * const counter = createCounter2(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */