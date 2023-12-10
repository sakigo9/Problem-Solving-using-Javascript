Array.prototype.groupBy = function (fn) {
  return this.reduce((result, item) => {
    const key = fn(item);
    if (result.hasOwnProperty(key)) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
    return result;
  }, {});
};
