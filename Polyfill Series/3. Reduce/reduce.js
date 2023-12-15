/**
 * 1. Higher order function
 * 2. Returns a new array
 * 3. Used on an array
 * 4. Takes an accumulator
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
Array.prototype.customReduce = function (callback, accumulator) {
  if (typeof accumulator === "object" && Array.isArray(accumulator)) {
    // for array case
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i);
    }
  }
  return accumulator;
};

let result = arr.customReduce((res, ele, index) => {
  res[index] = ele ** 2;
  return res;
}, []);
console.log(result);

// Actual implementation
let sample = arr.reduce((res, ele, index) => {
  res[index] = ele ** 2;
  return res;
}, []);
// console.log(sample);
