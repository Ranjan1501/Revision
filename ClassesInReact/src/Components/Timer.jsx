// useRef  for storing id for set  intervals
// fileUpload or image upload
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timeRef = useRef();
  let ref = useRef();
  //   console.log(timeRef);
  useEffect(() => {
    return stopCounter;
  }, []);

  const startCounter = () => {
    if (isRunning) {
      return;
    }
    timeRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stopCounter = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
  };
  const handleSubmit = () => {
    console.log(ref.current.files[0]);
  };
  return (
    <div>
      <p>Counter</p>
      <p> {count}</p>
      <button onClick={startCounter}> Start</button>
      <button onClick={stopCounter}>Stop</button>
      <br />
      <input type="file" ref={ref} />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
};
