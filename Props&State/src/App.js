import { useState } from "react";
import "./App.css";
import PopUp from "./components/PopUp";

function App() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div className="App">
      <main>
        <h1> Open Pop Up </h1>
        <br /> <br />
        <button onClick={() => setButtonPopUp(true)}> Open Pop Up </button>
      </main>

      <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        <h1> Hello World! </h1>
      </PopUp>
    </div>
  );
}

export default App;
