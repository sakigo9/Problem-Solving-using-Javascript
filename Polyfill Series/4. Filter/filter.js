/**
 *
 */
const arr = [1, null, 3, 4, 6, undefined, 8];
Array.prototype.customFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      res.push(callback(this[i]));
    }
  }
  return res;
};

let result = arr.customFilter((ele) => ele);
console.log(result);
