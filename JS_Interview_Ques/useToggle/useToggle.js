// const React = require('react')
// const ReactDOM = require('react-dom')

// import { useCallback, useState } from "react";

const useToggle = (arr, index = 0) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const toggle = useCallback(() => {
    return setCurrentIndex((prevValue) =>
      prevValue >= arr.length - 1 ? 0 : prevValue + 1
    );
  }, [arr]);

  return [toggle, arr[currentIndex]];
};

const UseToggle = () => {
  const [toggle, value] = useToggle([1, 2, 3, 4, 5], 2);
  return (
    <div>
      <h1>Current Value : {value}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default UseToggle;

// ReactDOM.render(<UseToggle />, document.getElementById("root"));
