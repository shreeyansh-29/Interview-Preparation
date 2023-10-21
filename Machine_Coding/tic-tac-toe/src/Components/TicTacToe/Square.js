import React from "react";

const Square = ({value, onClick}) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
