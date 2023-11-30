var promiseAll = function (functions) {
  let resolvedTaskCount = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    functions.forEach((t, index) => {
      t()
        .then((arg) => {
          resolvedTaskCount++;
          result[index] = arg;
          if (resolvedTaskCount === functions.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
