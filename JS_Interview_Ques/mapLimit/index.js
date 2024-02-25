// Implement a mapLimit function that is similar to the Array.map() which returns a promise that resolves on the list
// of output by mapping each input through an asynchronous iteratee function or rejects it if any error occurs.
// It also accepts a limit to decide how many operations can occur at a time.

// The asynchronous iteratee function will accept a input and a callback.
// The callback function will be called when the input is finished processing, t
// he first argument of the callback will be the error flag and the second will be the result.

Array.prototype.chop = function (size) {
  let temp = [...this];
  if (!size) {
    return temp;
  }
  const output = [];
  for (let i = 0; i < this.length; i = i + size) {
    output.push(this.slice(i, i + size));
  }
  return output;
};

const mapLimit = function (arr, limit, fn) {
  return new Promise((resolve, reject) => {
    const choppedArray = arr.chop(limit);

    const final = choppedArray.reduce((a, b) => {
      return a.then((val) => {
        return new Promise((resolve, reject) => {
          const results = [];
          let tasksCompleted = 0;
          b.forEach((e) => {
            fn(e, (error, value) => {
              if (error) {
                reject(error);
              } else {
                results.push(value);
                tasksCompleted++;
                if (tasksCompleted >= b.length) {
                  resolve([...val, ...results]);
                }
              }
            });
          });
        });
      });
    }, Promise.resolve([]));

    final
      .then((result) => {
        resolve(result);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 2000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));
