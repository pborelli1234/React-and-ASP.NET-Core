import React, { useState } from "react";

export default function Events() {
  // let canSee = false;

  // using react hook
  const [canSee, setCanSee] = useState(false);
  const [text, setText] = useState("");

  function handleCheckboxChange() {
    setCanSee(!canSee);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
    setText(e.currentTarget.value);
  }

  return (
    <>
      <h1>Events Example</h1>

      <div>
        <input type="checkbox" onChange={handleCheckboxChange} />
      </div>
      <div>
        <button
          onClick={() => {
            alert("I have been clicked");
          }}
        >
          Click me
        </button>
      </div>
      <div>
        <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
      </div>

      {canSee ? (
        <div>You are seeing the secret.</div>
      ) : (
        <div>You are not allowed to see.</div>
      )}

      <div>{text}</div>
    </>
  );
}
