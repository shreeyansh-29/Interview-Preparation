//Increment counter every second by 1 and on stop increments stop and on resume again start from same value 
//of count

import React, {useState, useRef} from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const timeRef = useRef(null);
  // The useRef Hook allows you to persist values between renders.

  const onStart = () => {
    timeRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const onStop = () => {
    clearInterval(timeRef.current);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
