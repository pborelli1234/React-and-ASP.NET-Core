import { useEffect, useState } from "react";

export default function UseEffectExamples() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // executed immediately
    console.log("componenet loaded");

    return () => {
      // run before the component is destroyed
      console.log("the component will be destroyed.");
    };
  }, []);

  useEffect(() => {
    document.title = `${clicks} times`;
  }, [clicks]);

  return (
    <>
      <h2>UseEffect Examples</h2>

      <div>
        <button
          onClick={() => {
            setClicks(clicks + 1);
          }}
        >
          You have clicked {clicks} times
        </button>
      </div>
    </>
  );
}
