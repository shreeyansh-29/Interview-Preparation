//Using function as constructor
const ComputeAmount = function () {
  this.store = 0;

  this.crore = function (val) {
    this.store += val * Math.pow(10, 7);
    return this;
  };

  this.lacs = function (val) {
    this.store += val * Math.pow(10, 5);
    return this;
  };

  this.thousand = function (val) {
    this.store += val * Math.pow(10, 3);
    return this;
  };

  this.hundred = function (val) {
    this.store += val * Math.pow(10, 2);
    return this;
  };

  this.ten = function (val) {
    this.store += val * 10;
    return this;
  };

  this.unit = function (val) {
    this.store += val;
    return this;
  };

  this.value = function () {
    return this.store;
  };
};

const amount = ComputeAmount().lacs(9).lacs(1).thousand(10).ten(1).unit(1).value();
console.log(amount === 1010011);

const amount2 = ComputeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
console.log(amount2 === 143545000);


//Using function as closure
function computeAmount() {
  let temp = {
    total: 0,
    lacs: function (num) {
      this.total = this.total + num * Math.pow(10, 5);
      return this;
    },
    crores: function (num) {
      this.total = this.total + num * Math.pow(10, 7);
      return this;
    },
    thousands: function (num) {
      this.total = this.total + num * Math.pow(10, 3);
      return this;
    },
    value: function () {
      return this.total;
    },
  };
  return temp;
}

let total = computeAmount().lacs(15).crores(5).value();
console.log(total);
