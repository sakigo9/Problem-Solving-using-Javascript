

var expect = function(val) {
    return{
        local:val,
        toBe:function(value){
           if(value===this.local) return true;
           throw new Error("Not Equal")
        },
        notToBe:function(value){
           if(value!==this.local) return true;
           throw new Error("Equal")
        }
    }
 };
 