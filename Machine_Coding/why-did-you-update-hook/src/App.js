import {useState} from "react";
import "./App.css";
import WhyDidYouUpdate from "./hook";

function App() {
  const [count, setCount] = useState(0);

  function onFn() {
    console.log("Hello");
  }

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <div>{count}</div>
      <Example fn={onFn} />
    </div>
  );
}

export default App;

function Example(props) {
  WhyDidYouUpdate("Example", props);
  return <div>{props.count}</div>;
}
