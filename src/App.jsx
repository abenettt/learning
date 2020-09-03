import React from "react";
import "./App.css";
import Test from "./components/Test/Test";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      App.jsx soooo
      <div>
        <Test text="Yo guys" />
      </div>
      <div>
        The Counter:
        <Counter />
      </div>
    </div>
  );
}

export default App;
