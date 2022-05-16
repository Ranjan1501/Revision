import "./App.css";
import { Timer } from "./Components/Timer";
import { Clock } from "./Components/Clock";
// import { ErrorBoundary, BuggyCounter } from "./Components/ErrorBoundry";
import { Greeting } from "./Components/Greeting";
// import { Example } from "./Components/Example";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Nabvar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Greeting />}>
          {" "}
        </Route>
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
        <Route path="*" element={<h1> Page Not Found</h1>}></Route>
      </Routes>
      {/* <Example /> */}
      {/* <Clock /> */}
      {/* <div>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br />
            <br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates
            a JavaScript error in a component.
          </b>
        </p>
        <hr />
        <ErrorBoundary>
          <p>
            These two counters are inside the same error boundary. If one
            crashes, the error boundary will replace both of them.
          </p>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div> */}
      {/* <Greeting isLoggedIn={true} /> */}
    </div>
  );
}

export default App;
