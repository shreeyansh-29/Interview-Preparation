const cssGenerator = (root, target) => {
  let selectors = [];

  while (root != target) {
    let nth = Array.from(target.parentNode.children).indexOf(target) + 1;

    const selector = `${target.tagName.toLowerCase()}:nth-child(${nth})`;

    selectors.unshift(selector);
    target = target.parentNode;
  }
  selectors.unshift(`${root.tagName.toLowerCase()}[id="${root.id}"]`)
  return selectors.join(" > ");
};

const root = document.getElementById("root");
const target = document.getElementById("target");

console.log(cssGenerator(root, target));


// OUTPUT
// div[id="root"] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)
