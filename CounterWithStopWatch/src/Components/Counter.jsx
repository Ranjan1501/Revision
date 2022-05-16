import React, {  useEffect, useRef, useState } from "react";
import ShowCounter from "./ShowCounter";

// controlled counter with start, stop and reset functionality

export function Counter({ props }) {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {}, [counter]);

  const id = useRef();

  const startCounter = (data) => {
    if (isRunning) {
      return;
    }
    id.current = setInterval(() => {
      setCounter((prev) => prev + data);
    }, 1000);
    setIsRunning(true);
  };
  const stopCounter = () => {
    clearInterval(id.current);
    setIsRunning(false);
  };

  const resetCounter = () => {
    stopCounter();
    setCounter(0);
  };
  console.log("Counter:", counter);
  return (
    <div>
      Counter: {counter}
      <br />
      <button onClick={() => startCounter(1)}> Start</button>
      <button onClick={stopCounter}> Stop</button>
      <button onClick={resetCounter}> Reset</button>
      <ShowCounter props={counter} />
    </div>
  );
}
