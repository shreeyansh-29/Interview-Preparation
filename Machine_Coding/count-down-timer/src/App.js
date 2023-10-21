import "./App.css";
import TimeWrapper from "./timer/timeWrapper";

function App() {
  function onExpire() {
    console.log("expired");
  }

  return (
    <div className="App">
      <TimeWrapper onExpire={onExpire} duration={20 * 1000} />
    </div>
  );
}

export default App;
