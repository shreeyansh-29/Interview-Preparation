const solution = (id) => {
  const parent = document.getElementById(id);
  const inputs = parent.querySelectorAll("input");
  let output = {};

  inputs.forEach((e) => {
    const {name, value} = e;
    const pathArr = name.split(".");
    // console.log(pathArr);
    
    let temp = output;
    pathArr.forEach((p, index) => {
      if (!(p in temp)) temp[p] = {};
      if (index === pathArr.length - 1) temp[p] = value;

      temp = temp[p];
    });
  });
  return output;
};

console.log(solution("parent"));

//OUTPUT
// {
//     "a": {
//         "c": "1",
//         "b": {
//             "d": "2",
//             "e": "3"
//         }
//     }
// }