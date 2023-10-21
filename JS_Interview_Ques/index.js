// import React, {useCallback, useRef} from "react";
// import ReactDOM from "react-dom";

// const debounce = (fn, d) => {
//     let timer;
//     return function (args) {
//       let context = this;
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(context, args);
//       }, d);
//     };
//   };
// const getData = () => console.log("Fetching Data");

// function throttle(fn, d) {
//   let flag = true;
//   return function (...args) {
//     let context = this,
//       params = arguments;
//     if (flag) {
//       fn.apply(context, params);
//       flag = false;
//       setTimeout(() => {flag = true}, d);
//     }
//   };
// }

// const loggerFunction = () => console.log("clicked");
// const betterFunction = throttle(loggerFunction, 1000);

//call, apply, bind
// let obj1 = {
//   firstName: "Shree",
//   lastName: "Singh",
// };

// const printFullName = function (state, city, Country) {
//   console.log(
//     this.firstName +
//       "  " +
//       this.lastName +
//       " " +
//       state +
//       " " +
//       city +
//       "  " +
//       Country
//   );
// };
// // obj1.printFullName()

// let obj2 = {
//   firstName: "Rahul",
//   lastName: "Verma",
// };

// // printFullName.call(obj1, "UP", "Lucknow");

// let printFullName2 = printFullName.bind(obj2, "UP", "Lucknow", "India");
// printFullName2();

// Function.prototype.mybind = function (...args) {
//   let obj = this,
//     params = args.slice(1);
//   return function (...arguments) {
//     obj.apply(args[0], [...params, ...arguments]);
//   };
// };

// let printFullName3 = printFullName.mybind(obj2, "Bihar", "Patna");
// printFullName3("India");

//Currying

// function mutiply(a, b) {
//   return a * b;
// }

// function currying(fn) {
//   return function (a) {
//     return function (b) {
//       return fn(a,b);
//     };
//   };
// }

// const curryingMutliply = currying(mutiply);

// console.log(mutiply(4, 2));
// console.log(curryingMutliply(4)(2));

// let mutli = mutiply.bind(this, 2);
// console.log(mutli(2));

//Memoization
// function add256(a) {
//   console.log(256 + a);
// }

// add256(40);
// add256(20);
// add256(40);

// function Memoization() {
//   let cache = {};

//   return function (num) {
//     if (num in cache) {
//       // console.log(cache[num]);
//       return cache[num];
//     } else {
//       let a = 256 + num;
//       cache[num] = a;
//       return cache[num];
//     }
//   };
// }

// let helper = Memoization();

// console.log(helper(20));
// console.log(helper(25));
// console.log(helper(20));

// document.getElementById("message").innerHTML="<h1>Message</h1>"

// let name1 = {
//   first: "Shree",
//   last: "Singh",
// };

// const printFullName = function (state, city, country) {
//   console.log(
//     this.first + " " + this.last + " " + state + " " + city + " " + country
//   );
// };
// printFullName.call(name1);

// let name2 = {
//   first: "Rahul",
//   last: "Kumar",
// };

// let output = printFullName.bind(name2, "UP", "Lucknow", "INDIA");
// output();

// Function.prototype.myBind = function (...args) {
//   let obj = this,
//     params = args.slice(1);
//   return function (...arguments) {
//     obj.apply(args[0], [...params, ...arguments]);
//   };
// };

// let output1 = printFullName.myBind(name2, "UP", "Lucknow");
// output1("India");

// function mutiply(a, b) {
//   console.log(a * b);
// }

// function currying(fn) {
//   return function (a) {
//     return function (b) {
//       return fn(a, b);
//     };
//   };
// }

// let curryingMutliply = currying(mutiply);

// mutiply(4, 3);
// curryingMutliply(4)(3);

// const higherOrderFunction = (fn) => {
//   return fn;
// };

// let x = higherOrderFunction(() => console.log("HOF"));
// x();

// function x() {
//   let y = 10;
//   return function () {
//     console.log(y);
//   };
// }

// let j = x();

// function output() {
//   console.log("fecthing");
// }

// const debounce = (fn, delay, options = {leading: false, trailing: false}) => {
//   let timer = useRef(null);
//   let isLeadingInvoked = useRef(false);

//   const innerDebounce = useCallback(() => {
//     let context = this,
//       args = arguments;
//     if (timer) {
//       clearTimeout(timer);
//     }

//     if (options.leading && !timeout.current) {
//       fn.apply(context, args);
//       isLeadingInvoked.current = true;
//     } else {
//       isLeadingInvoked.current = false;
//     }

//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       if (options.trailing && !isLeadingInvoked) {
//         fn.apply(context, args);
//       }
//       timer = null;
//     }, delay);
//   }, [fn, delay, options]);
//   return innerDebounce;
// };

// export const betterFunction = debounce(output, 500);

// const App = () => {
//   const output = () => console.log("Fetching");

//   const debounce = (func, wait, options = {leading: true, trailing: true}) => {
//     let timeout;
//     let isLeadingInvoked = false;

//     const debounceInner = useCallback(
//       function () {
//         let context = this,
//           args = arguments;

//         if (timeout) clearTimeout(timeout);
//         if (options.leading && !timeout) {
//           func.apply(context, args);
//           isLeadingInvoked = true;
//         } else {
//           isLeadingInvoked = false;
//         }

//         clearTimeout(timeout);

//         timeout = setTimeout(function () {
//           if (options.trailing && !isLeadingInvoked) {
//             func.apply(context, args);
//           }

//           timeout = null;
//         }, wait);
//       },
//       [func, wait, options]
//     );

//     return debounceInner;
//   };
//   const betterFunction = debounce(output, 500);
//   return (
//     <input type="search" placeholder="Enter Text" />
//   );
// };

// ReactDOM.render(App, document.getElementById("root"));


