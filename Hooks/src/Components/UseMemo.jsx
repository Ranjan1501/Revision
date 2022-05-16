import React, { useEffect, useMemo, useState } from "react";

function slowFunction(number) {
  console.log("slow function");
  for (let i = 0; i < 10000000000000; i++) {
    return number * 2;
  }
}
// here whenever there is change in the function it invoke slowFunction and compute the result which takes time as it has long loop to run then return double of the number.
// when there is an event toggle it again compute and re-render the components which cause performance issues. Toggle takes delay to perform to toggle the theme.

// this issue can be fixed by useMemo hooks which is little bit similar to useEffect it has a dependencies array which monitor the changes in the dependencies array renders accordingly. hence Toggle the theme will work  instantly fast as there is no change in the dependencies array. useMemo memoise the last computed result just like in Dynamic Programming.

//Referencing Equality:-     useMemo is also used to memoise the object reference here themeStyle so that it does not create a new object when there is no change in the dependencies in case of UseEffect

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme Changed");
  }, [themeStyle]);

  // note if we have not used useMemo it will execute theme change every time when component is re-rendered. since  the reference of themeStyle is created every time useEffect did not able to monitor the change in the dependencies array.
    
  return (
    <>
      <h1> Use Memo Hook </h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={(e) => setDark((prev) => !prev)}> Toggle Theme </button>
      <div style={themeStyle}> {doubleNumber}</div>
    </>
  );
}

export default UseMemo;
