import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Simple from "./Simple";
import Expressions from "./Expressions";
import Conditionals from "./Conditionals";
import Events from "./Events";
import MapExample from "./MapExample";
import ConditionalIfSeveralComponents from "./ConditionalIfSeveralComponents";
import CSSExample from "./CSSExample";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CSSExample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
