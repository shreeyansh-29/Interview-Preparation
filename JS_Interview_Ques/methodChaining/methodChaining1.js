//one approach
//using object
// const calculator = {
//   total: 0,
//   add: function (val) {
//     this.total += val;
//     return this;
//   },
//   subtract: function (val) {
//     this.total -= val;
//     return this;
//   },
//   divide: function (val) {
//     this.total /= val;
//     return this;
//   },
//   multiply: function (val) {
//     this.total *= val;
//     return this;
//   },
// };

// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total);


//Method chaining with functions
const CALC = function () {
  this.total = 0;

  this.add = (val) => {
    this.total += val;
    return this;
  };

  this.subtract = (val) => {
    this.total -= val;
    return this;
  };

  this.multiply = (val) => {
    this.total *= val;
    return this;
  };

  this.divide = (val) => {
    this.total /= val;
    return this;
  };

  this.value = () => this.total;
};

const calculator = new CALC();
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);