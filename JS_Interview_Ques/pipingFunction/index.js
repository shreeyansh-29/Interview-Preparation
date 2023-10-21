const Fn = (test) => {
  return function (...args) {
    for (let key in test) {
      const val = test[key];
      if (typeof val === "function") {
        test[key] = val(...args);
      } else if ((val && typeof val === "object") || !Array.isArray(val)) {
        test[key] = Fn(val)(...args);
      }
    }
    return test;
  };
};

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(Fn(test)(1, 1, 1));

//OUPUT
// {
//   "a": {
//       "b": 3,
//       "c": 1
//   },
//   "d": -1,
//   "e": 1,
//   "f": true
// }
