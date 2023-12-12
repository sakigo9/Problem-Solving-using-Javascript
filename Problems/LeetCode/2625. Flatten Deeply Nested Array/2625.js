var flat = function (arr, depth) {
  if (depth === 0) {
    return arr;
  }

  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
    return result;
  }, []);
};
