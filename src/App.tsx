import React, { useEffect, useState } from "react";
import init, { add } from "wasm-lib";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    init().then(() => console.log("wsam ready"));
  }, []);

  return (
    <div className="App">
      <div>{state}</div>
      <button onClick={() => setState(add(state, 1))}>add</button>
    </div>
  );
}

export default App;
