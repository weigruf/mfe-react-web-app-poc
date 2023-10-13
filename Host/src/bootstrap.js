import React from "react";
import ReactDOM from "react-dom/client";
import HomeApp from "./components/pages/HomeApp";
import "../styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeApp />
  </React.StrictMode>
);
