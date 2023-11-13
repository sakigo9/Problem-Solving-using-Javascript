
// Solution : https://jsfiddle.net/SaketPrag/qxk0zt4u/5/

function adder(param){
    let local=param
    return function(...args){
       console.log("Result :",local+args[0])
       return local+args[0]
    }
  }
  
  /* Output */
  let value=adder(20);
  value(12);
  value(23);