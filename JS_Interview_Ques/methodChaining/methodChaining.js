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
