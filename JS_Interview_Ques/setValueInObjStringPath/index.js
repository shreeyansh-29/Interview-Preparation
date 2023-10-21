// const object = { 'a': [{ 'b': { 'c': 3 } }] };

const helper = (obj, path, val) => {
  let [current, ...rest] = path;

  if (rest.length > 0) {
    if (!obj[current]) {
      let isNumeric = `${+rest[0]}` === rest[0];
      obj[current] = isNumeric ? [] : {};
    }
    if (typeof obj[current] === "object") {
      let isNumeric = `${+rest[0]}` === rest[0];
      obj[current] = helper(isNumeric ? [] : {}, rest, val);
    } else {
      obj[current] = helper(obj[current], rest, val);
    }
  } else {
    obj[current] = val;
  }
  return obj;
};

const set = (obj, path, val) => {
  let pathArr = path;

  if (typeof pathArr === "string") {
    pathArr = pathArr.replaceAll("[", ".").replaceAll("]", "").split(".");
  }
  helper(obj, pathArr, val);
};

let object = {};

set(object, "a[0].b.c", 4);
console.log(object.a[0].b.c);
// 4
console.log(object);

// {
//     "a": [
//         {
//             "b": {
//                 "c": 4
//             }
//         }
//     ]
// }

// set(object, ["x", "0", "y", "z"], 5);
// console.log(object.x[0].y.z);
// // 5
// console.log(object)

// {
//     "x": [
//         {
//             "y": {
//                 "z": 5
//             }
//         }
//     ]
// }
