import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.css";
import App from "./App";

import { AppProvider } from "./Components/Context/Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
