const getComputedColor = (colorCode) => {
  const div = document.createElement("div");
  div.style.color = colorCode;
  document.body.appendChild(div);
  const computedStyles = window.getComputedStyle(div);
  const {color} = computedStyles;
  document.body.removeChild(div);
  return color;
};

const findEle = (root, colorCode) => {
  let standardColor = getComputedColor(colorCode);
  const elements = [];
  const search = (ele) => {
    const elementColor = ele.style.color;
    const computedEleColor = getComputedColor(elementColor);

    if (computedEleColor === standardColor) elements.push(ele.tagName);
    for (let child of ele.children) search(child);
  };
  search(root);

  return elements;
};

const root = document.getElementById("root");
console.log(findEle(root, "white"));
