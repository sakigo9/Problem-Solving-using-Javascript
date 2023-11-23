
var addTwoPromises = async function(promise1, promise2) {
    return promise1.then((val) => promise2.then((val2) => val + val2))
            .catch((e) => console.log(e));
};