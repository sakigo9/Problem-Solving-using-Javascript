
var addTwoPromises = async function(promise1, promise2) {
    return await Promise.all([promise1,promise2]).then(([value1,value2])=>{
       return value1+value2
    })
};
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4


var addTwoPrmises2=async function(promise1,promise2){
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
}