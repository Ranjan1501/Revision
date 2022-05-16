import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const UseRef = () => {
  const [name, setName] = useState("");

  const renderCount = useRef(0);
  // renderCount will return an object with current as key and 0 values { current: 0}

  const inputRef = useRef();
  // useRef can also be used to reference element inside the HTMl element
  // document.querySelector

  const prevName = useRef("");
  // useRef can also be used to store the previous value of the state

  const getFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    // useRef does not cause the component re- render. It Persist between renders of your components
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>
        {" "}
        My Name is {name} and it used to be {prevName.current}
      </h3>
      <div> Name is Rendered {renderCount.current} times </div>
      <button onClick={getFocus}> Focus</button>
    </>
  );
};
