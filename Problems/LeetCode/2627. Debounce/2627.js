var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};
