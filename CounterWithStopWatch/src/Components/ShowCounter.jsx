import React, { useContext, useState } from "react";
// import { CounterContext } from "./Counter";

const Child = ({ value, handleChange }) => {
  const handleIncrement = () => {
    handleChange(1);
  };
  return (
    <div>
      <h1>Count is :{value}</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};
function ShowCounter({ props, startCounter }) {
  const [count, setCount] = useState(0);
  //   const { counter } = useContext(CounterContext);
  const handleChange = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      {/* <h3> Data From Counter: {counter} </h3> */}
      <h3> ShowCounter: {props}</h3>
      <button onClick={() => handleChange(+1)}> Inc</button>
      <Child value={count} handleChange={handleChange} />
    </div>
  );
}

export default ShowCounter;
