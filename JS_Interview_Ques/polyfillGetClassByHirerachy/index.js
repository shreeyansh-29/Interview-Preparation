//Write a function getByClassNameHierarchy() in javaScript that takes a path of class names and
//returns the last element of that path.

function getByClassNameHierarchy(element, classNames) {
  const classList = classNames.split(">");
  const result = [];

  traverseDOM(element, classList, 0, result);

  return result;
}

function traverseDOM(element, classNames, index, result) {
  if (!element) {
    return;
  }
  const targetClass = classNames[index];

  if (
    index === classNames.length - 1 &&
    element.classNames.contains(targetClass)
  ) {
    result.push(element);
    return;
  }

  for (const child of element.children) {
    if (element.classNames.contains(targetClass)) {
      traverseDOM(child, classNames, index + 1, result);
    } else {
      traverseDOM(child, classNames, 0, result);
    }
  }
}

console.log(getByClassNameHierarchy(document.getElementById("root"), "a>b>c"));
  
// Output div#c-1.c