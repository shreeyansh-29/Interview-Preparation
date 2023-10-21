const outputFunction = () => {
  console.log("Fetching...");
};

//Normal Debounce
// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     let context = this,
//       params = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, [...params, ...args]);
//     }, delay);
//   };
// }

//Immediately Call
// function debounce(fn, delay, immediate = true) {
//   let timer;
//   return function (...args) {
//     let context = this,
//       params = arguments;
//     let callNow = immediate && !timer;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = null;

//       if (!immediate) {
//         fn.apply(context, [...params, ...args]);
//       }
//     }, delay);

//     if (callNow) fn.apply(context, params);
//   };
// }

//Options={leading: boolean, trailing: boolean}
function debounce(fn, delay, options = {leading: true, trailing: true}) {
  let timer;
  let isLeadingInvoked = false;

  return function (...args) {
    let context = this,
      params = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    if (options.leading && !timer) {
      fn.apply(context, [...params, ...args]);
      isLeadingInvoked = true;
    } else isLeadingInvoked = false;

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (options.trailing && !isLeadingInvoked) {
        fn.apply(context, [...params, ...args]);
      }
      timer = null;
    }, delay);
  };
}

const debouncedFunction = debounce(outputFunction, 300);
