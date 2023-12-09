var chunk = function (arr, size) {
  let result = [];
  let counter = 0;
  while (counter < arr.length) {
    result.push(arr.slice(counter, counter + size));
    counter += size;
  }
  return result;
};
