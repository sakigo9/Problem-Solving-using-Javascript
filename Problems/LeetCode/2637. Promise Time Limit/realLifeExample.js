var timeLimit = function (fn, t) {
  return async function (...args) {
    let firstPromise = fn(...args);
    let secondPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    return Promise.race([firstPromise, secondPromise]);
  };
};

async function fetchData() {
  return new Promise((delayresolve) => {
    setTimeout(() => {
      delayresolve("Data fetched successfully!");
    }, 2000);
  });
}

const timeLimitedFetchData = timeLimit(fetchData, 1500);

timeLimitedFetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
