function getElementByClassName(node, c) {
  const search = (node) => {
    let results = [];

    if (node.classList.contains(c)) {
      results.push(node);
    }
    for (let child of node.children) {
      let res = search(child);
      results = [...results, ...res];
    }
    return results;
  };

  return search(node);
}

const root = document.getElementById("root");
console.log(getElementByClassName(root, "a"));
