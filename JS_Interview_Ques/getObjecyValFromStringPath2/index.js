const get = (obj, path) => {
  if (!path || path.length === 0) {
    return undefined;
  }

  let excludedKeys = ["[", "]", "."];
  let keys = [];

  for (let i = 0; i < path.length; i = i + 1) {
    if (!excludedKeys.includes(path[i])) keys.push(path[i]);
  }
  // console.log(keys);
  let value = keys.reduce((obj, key) => {
    return obj[key];
  }, obj);

  return value;
};

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, "a.b.c")); //[1,2,3]
console.log(get(obj, "a.b.c.0")); //1
console.log(get(obj, "a.b.c[1]")); //2
console.log(get(obj, "a.b.c[3]")); //undefined
