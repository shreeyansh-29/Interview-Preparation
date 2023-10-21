function sampler(callback, count = 1) {
  let counter = 0;

  return function (...args) {
    counter++;
    if (counter === count) {
      callback(...args);
      counter = 0;
    }
  };
}

function message() {
  console.log("hello");
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // hello
sample();
sample();
sample();
sample(); // hello
