import "./App.css";
import { ErrorBoundary } from "./component/ErrorBoundary";
import { Hero } from "./component/Hero";

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <Hero heroName="John Carter" />
        <Hero heroName="Thor" />
        <Hero heroName="Ranjan" />
      </ErrorBoundary> */}
      {/* entire app is fallback has fallback UI */}
      <ErrorBoundary>
        <Hero heroName="John Carter" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Thor" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Ranjan" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
