var compactObject = function (obj) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      const local = [];
      obj.forEach((item) => {
        if (Boolean(item)) {
          local.push(compactObject(item));
        }
      });
      return local;
    } else {
      let local = {};
      for (let key in obj) {
        if (Boolean(obj[key])) {
          local[key] = compactObject(obj[key]);
        }
      }
      return local;
    }
  }
  return obj;
};
