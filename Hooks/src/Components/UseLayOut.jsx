import React, { useLayoutEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

function UseLayOut() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <h3> Use Layout Effect </h3>
      <Button type="primary" onClick={() => setCount((prev) => prev + 1)}>
        {" "}
        Count
      </Button>
      <div> {count}</div>
    </div>
  );
}

export default UseLayOut;
