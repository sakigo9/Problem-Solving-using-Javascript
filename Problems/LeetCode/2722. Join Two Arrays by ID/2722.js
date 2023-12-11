// Solution 1

var join = function (arr1, arr2) {
  return Object.values(
    [...arr1, ...arr2].reduce((res, item) => {
      res[item.id] = { ...res[item.id], ...item };
      return res;
    }, {})
  );
};
