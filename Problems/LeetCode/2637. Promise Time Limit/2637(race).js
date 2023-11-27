var timeLimit = function (fn, t) {
  return async function (...args) {
    let firstPromise = fn(...args);
    let secondPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    return Promise.race([firstPromise, secondPromise]);
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(50).catch(console.log);
