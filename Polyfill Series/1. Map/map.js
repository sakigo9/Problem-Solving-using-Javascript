const arr = [1, 2, 3, 4];
Array.prototype.customMap = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i));
  }
  return res;
};

let result = arr.customMap((ele, index) => ele);
console.log(result);
