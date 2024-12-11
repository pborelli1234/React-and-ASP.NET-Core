import { useState } from "react";
import Simple from "./Simple";

export default function Conditionals() {
  const [selectedRate, setSelectedRate] = useState(1);

  function displayResult() {
    if (selectedRate === 1) {
      return <span>Nooo!!</span>;
    } else if (selectedRate === 2) {
      return (
        <>
          <span>Please tell us how to get better: </span>
          <input type="text" />
        </>
      );
    } else if (selectedRate === 3) {
      return (
        <>
          <Simple></Simple>
        </>
      );
    } else {
      return <span>Thank you!</span>;
    }
  }

  return (
    <>
      <h1>Conditional If Example</h1>

      <div>Rate this website</div>
      <br />
      <br />

      <div>{displayResult()}</div>
    </>
  );
}
