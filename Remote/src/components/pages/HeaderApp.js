import React from "react";

function HeaderApp() {
  return (
    <div
      className="container"
      style={{
        background: "#1E1F4D",
        padding: 20,
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ margin: 20 }}>
        Hello from the remote web app (microfrontend) served via Webpack Module
        Federation!
      </h2>
    </div>
  );
}

export default HeaderApp;
