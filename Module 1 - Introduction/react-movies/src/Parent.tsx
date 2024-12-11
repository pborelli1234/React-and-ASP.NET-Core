import Child from "./Child";
import { useContext } from "react";
import ValueContext from "./ValueContext";

export default function Parent() {
  const value = useContext(ValueContext);

  return (
    <>
      <br />
      <br />
      <div>
        From the parent {value ? "the value is true" : "the value is false"}
      </div>
      <Child />
    </>
  );
}
