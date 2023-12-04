Array.prototype.last = function () {
  return this.length > 0 ? this.reverse()[0] : -1;
};
