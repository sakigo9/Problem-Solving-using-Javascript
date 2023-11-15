

var createCounter = function(init) {
    let local=init;
    return{
        increment: function(){
            return ++local
        },
        decrement:function(){
            return --local
        },
        reset:function(){
            local=init // at this point the value will be either greater or might be less than local, so we need to adjust local again.
            return local;
        }
    }
};