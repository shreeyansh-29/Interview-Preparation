// Given an array of objects and two keys “on” and “who”, aggregate the “who” values on the “on” values.

const aggregate = function (arr, on, who) {
  const agg = arr.reduce((a, b) => {
    const onValue = b[on];
    const whoValue = b[who];

    if (a[onValue]) {
      a[onValue] = {
        [on]: onValue,
        [who]: [...a[onValue][who], whoValue],
      };
    } else {
      a[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    }
    return a;
  }, {});
  return Object.values(agg);
};

const endorsements = [
  {skill: "css", user: "Bill"},
  {skill: "javascript", user: "Chad"},
  {skill: "javascript", user: "Bill"},
  {skill: "css", user: "Sue"},
  {skill: "javascript", user: "Sue"},
  {skill: "html", user: "Sue"},
];

console.log(aggregate(endorsements, "user", "skill"));

Output: [
  {
    user: "Bill",
    skill: ["css", "javascript"],
  },
  {
    user: "Chad",
    skill: ["javascript"],
  },
  {
    user: "Sue",
    skill: ["css", "javascript", "html"],
  },
];
