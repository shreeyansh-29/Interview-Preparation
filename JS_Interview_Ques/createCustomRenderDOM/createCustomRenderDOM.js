const dom = {
  type: "div",
  props: {id: "hello"},
  children: [{type: "h1", children: "Hello World", props: {id: "h1"}}],
};

const generateDOM = (domObj, entry) => {
  const helper = (obj) => {
    const {type, props, children} = obj;
    const el = document.createElement(type);
    if (props) {
      for (let property in props) {
        el[property] = props[property];
      }
    }
    if (typeof children === "string") {
      el.innerText = children;
    } else {
      const fragment = document.createDocumentFragment();
      for (let child of children) {
        fragment.appendChild(helper(child));
      }
      el.appendChild(fragment);
    }
    return el;
  };

  const generatedDom = helper(domObj);
  entry.appendChild(generatedDom);
};

const entry = document.getElementById("root");
generateDOM(dom, entry);
