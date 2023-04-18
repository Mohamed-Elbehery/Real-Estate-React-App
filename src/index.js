import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

// import BrowserRouter to Provide the whole App with Routing
import { BrowserRouter as Router } from "react-router-dom";

// import House Context Provider
import { HouseContextProvider } from "./components/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HouseContextProvider>
      <Router>
        <App />
      </Router>
    </HouseContextProvider>
  </React.StrictMode>
);
