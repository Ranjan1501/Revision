import React from "react";

// snippet in VS code for functional component -- rfce
function Hero({ heroName }) {
  if (heroName === "Ranjan") {
    throw new Error("Not a Hero");
  }
  return <div>{heroName}</div>;
}
export { Hero };

