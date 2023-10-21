const toggle = (...list) => {
  // to track the cycle
  let index = 0;
  return function () {
    console.log(list[index++]);

    if (index >= list.length - 1) index = 0;
  };
};

let hello = toggle("hello");
hello(); // "hello";
hello(); // "hello";

let onOff = toggle("on", "off");
onOff(); // "on"
onOff(); // "off"
onOff(); // "on"
