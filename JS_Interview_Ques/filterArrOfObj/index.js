// Implement a function in JavaScript that filters an array of objects based on the value or index.

const filterObject = (arr, filter) => {
  // if the value of the filter is a string
  // check in the values of the object
  if (typeof filter === "string") {
    for (const entry of arr) {
      // traverse each entry and check on value
      for (const [key, val] of Object.entries(entry)) {
        if (val === filter) {
          return entry;
        }
      }
    }
  }
  // if filter is number and can be accessed in arr
  else if (filter in arr) {
    return arr[filter];
  }
  // if nothing is found
  else {
    return undefined;
  }
};

const arr = [
  {name: "Amir", id: "1"},
  {name: "Samlan", id: "2"},
  {name: "Shahrukh", id: "0"},
];

console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }
