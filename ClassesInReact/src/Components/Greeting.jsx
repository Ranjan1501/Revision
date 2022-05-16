import React from "react";

// simplified props use case 
export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>User Greeting of the Day </h1>;
  }
  return <h1> Guest Greeting of the Day </h1>;
}
