import React, { useState } from "react";
import "./App.css";
import UseEffectExamples from "./UseEffectExamples";
import Grandparent from "./Grandparent";
import ValueContext from "./ValueContext";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples />}
      <ValueContext.Provider value={hide}>
        <Grandparent />
      </ValueContext.Provider>
    </>
  );
}

export default App;
