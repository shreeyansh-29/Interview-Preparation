//We are given a obj we need to filter out the values which pass the given filter condition;
//const filter = (e) => typeof e === string

const deepFilter = (obj, filter) => {
  //iterate the object
  let output = {};
  for (let key in obj) {
    const val = obj[key];

    //if val is also object (nested)
    if (typeof val === "object") {
      //recur
      output = {...output, ...deepFilter(val, filter)};
    }
    // normal value
    else {
      //current val fails filter condition
      //delete it
      if (filter(val) === false) {
        delete obj[key];
      } else output[key] = val;
    }

    //if value is empty obj
    //delete it
    if (JSON.stringify(val) === "{}") {
      delete obj[key];
    }
  }
  return output;
};

const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
  i: {},
};

const filter = (s) => typeof s === "string";
const zz = deepFilter(obj, filter);

console.log(zz);

// OUTPUT
// b: {
//   c: "Hello World",

//   h: "Good Night Moon",
// },
