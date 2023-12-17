// Bind : A Function Property

function demo(p1, p2) {
  return "Hello " + this.name + " welcome to " + p2 + p1;
}

const param = {
  name: "Saket",
};

let object1 = demo.bind(param, "Dev");
console.log(object1("Tech"));

// Polyfill
Function.prototype.customBind = function (...args) {
  let content = this;
  let firstArgs = args.splice(1);
  return function (...additionalArgs) {
    return content.apply(args[0], [...firstArgs, ...additionalArgs]);
  };
};

let object2 = demo.customBind(param, "Pragmatic");
console.log(object2("Dev"));
