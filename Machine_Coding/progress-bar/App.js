import {useEffect, useState} from "react";
import Progress from "./Progress";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <span>Progress Bar</span>
      <Progress
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <span>{success ? "Completed!" : "Loading..."}</span>
    </div>
  );
}
