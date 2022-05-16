import "./App.css";
import { Counter } from "./Components/Counter";
import ShowCounter from "./Components/ShowCounter";

function App() {
  return (
    <div className="App">
      <h2> Counter </h2>
      <Counter />
      {/* <ShowCounter /> */}
    </div>
  );
}

export default App;
