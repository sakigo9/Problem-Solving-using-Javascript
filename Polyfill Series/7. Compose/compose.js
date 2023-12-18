function compose(...functions) {
  return function (value) {
    return functions.reduceRight((acc, fn) => {
      return fn(acc);
    }, value);
  };
}
const add = (x) => x + 5;
const mul = (x) => x * 3;
const sub = (x) => x - 2;

const res = compose(add, mul, sub);
console.log(res(10));

// Polyfill
if (!Function.prototype.compose) {
  Function.prototype.compose = function (...functions) {
    const self = this;
    return function (input) {
      return functions.reduceRight(function (acc, fn) {
        return fn(acc);
      }, self(input));
    };
  };
}

// Example usage:
const addition = function (x) {
  return x + 5;
};

const multiply = function (x) {
  return x * 2;
};

const square = function (x) {
  return x ** 2;
};

const pipeFunctions = addition.compose(multiply, square);

const result = pipeFunctions(3); // ((3 + 5) * 2) ** 2 = 64
console.log(result);
