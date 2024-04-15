import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM
import "./Styles/index.scss"; // Importing CSS styles
import App from "./App"; // Importing the main App component

// Creating a root for ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component inside the root
root.render(
  // Wrapping the App component with React.StrictMode for additional checks and warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
