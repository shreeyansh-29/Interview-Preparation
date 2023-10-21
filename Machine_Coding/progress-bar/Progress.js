import {useEffect, useState} from "react";
import "./styles.css";

export default function Progress({value = 0, onComplete = () => {}}) {
  // console.log(value);
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) onComplete();
  }, [value]);

  return (
    <div className="progress">
      <span style={{color: percent > 49 ? "white" : "black"}}>
        {percent.toFixed(0)}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percent.toFixed(0)}
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
