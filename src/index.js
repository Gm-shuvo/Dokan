import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { CombineProvider } from "./context/CombineContext";

ReactDOM.render(
  <React.StrictMode>
    <CombineProvider>
      <App />
    </CombineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
