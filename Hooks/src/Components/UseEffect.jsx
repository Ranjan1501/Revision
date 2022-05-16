import React, { useEffect, useState } from "react";

function UseEffect() {
  const [resourceType, setResourceType] = useState("post");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //   useEffect(() => {
  //     console.log("render UseEffect Data");
  //     // Everything inside the arrow function will be executed every time whenever there is changes in the components.

  //     // if there is any dependencies inside useEffect it renders only when there is changes in the dependencies only. like resourceType

  //   }, [resourceType]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  console.log("render");
  useEffect(() => {
    console.log("On Mount");

    // it will only execute  once  during the mounting phase means when it renders first time.
  }, []);

  useEffect(() => {
      window.addEventListener("resize", handleResize);
      
      // EventListener will be constantly added up, which is never removed, ultimately cases slowdown the app having performance issues.

      // it is necessary to remove the eventListener with event  

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <h1> Use Effect UseCases</h1>
      <div>
        <button onClick={() => setResourceType("posts")}> Post</button>
        <button onClick={() => setResourceType("comments")}> Comment</button>
        <button onClick={() => setResourceType("users")}> User</button>
      </div>
      <div> {windowWidth} </div>
    </div>
  );
}

export default UseEffect;
