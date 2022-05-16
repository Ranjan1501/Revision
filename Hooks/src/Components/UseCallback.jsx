import React, { useEffect, useState } from "react";
import { useCallback } from "react";

function UseCallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2].join(" ");
  }, [number]);

  useEffect(() => {
    console.log("Updating Item");
  }, [getItem]);
  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={(e) => setDark((prev) => !prev)}> Toggle Theme </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {getItem()}
      </div>
    </div>
  );
}

export default UseCallback;
