import React, {useState} from "react";
import Timer from "./index";

const TimeWrapper = ({duration, onExpire}) => {
  const [hasExpired, setHasExpired] = useState(false);

  const handleRestart = () => {
    setHasExpired(false);
  };

  const onExpireHelper = () => {
    onExpire && onExpire();
    setHasExpired(true);
  };

  return !hasExpired ? (
    <Timer duration={duration} onExpire={onExpireHelper} />
  ) : (
    <button onClick={handleRestart}>Reset</button>
  );
};

export default TimeWrapper;
