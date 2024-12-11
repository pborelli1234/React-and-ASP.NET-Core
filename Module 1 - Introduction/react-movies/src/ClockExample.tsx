import React, { useEffect, useState } from "react";
import "./App.css";

export default function ClockExample() {
  const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <h3>Example React</h3>
      <input />
      <div>{myDate.toString()}</div>
    </>
  );
}
