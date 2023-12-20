function sum(a, b, c, d) {
  const sum = a + b + c + d;
  return `${this.operand} :` + sum;
}
const ops = {
  operand: "Addition",
};

console.log(sum.apply(ops, [10, 20, 30, 40]));

Function.prototype.customApply = function (...args) {
  let context = this;
  return context.call(args[0], ...args[1]);
};

console.log(sum.customApply(ops, [10, 20, 30, 40]));

// Second approach
Function.prototype.myApply = function (context, args) {
  let setContext = context || globalThis; // picks this in terms of apply i.e. ops object
  let key = Symbol("uniqueKeys"); // need to create a unique key
  setContext[key] = this;
  let result = setContext[key](...args);
  delete setContext[key];
  return result;
};

console.log(sum.myApply(ops, [10, 20, 30, 40]));
