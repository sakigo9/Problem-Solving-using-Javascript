/**
 * Info :
 * 1. Higher order function
 * 2. Returns nothing/undefined
 * 3. Used on an array
 */

const arr = [1, 2, 3, 4, 5];
Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let result = arr.customForEach((ele) => console.log(ele));
