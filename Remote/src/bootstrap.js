import React from "react";
import ReactDOM from "react-dom/client";
import HeaderApp from "./components/pages/HeaderApp";
import "../styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderApp />
  </React.StrictMode>
);
