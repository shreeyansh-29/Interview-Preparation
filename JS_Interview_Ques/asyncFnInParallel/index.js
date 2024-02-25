// Implement a function in JavaScript that takes a list of async functions as input and a callback function and
// executes the async tasks in parallel that is all at once and invokes the callback after every task is executed.

const executeParallel = (arr, fn) => {
  const results = [];
  let tasksCompleted = 0;

  arr.forEach((task) => {
    task((val) => {
      results.push(val);
      tasksCompleted++;

      if (tasksCompleted >= results.length) fn(results);
    });
  });
};

function asyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
  console.log(result);
});
