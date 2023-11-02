import React from "react";

function HeaderApp({ data = {} }) {
  return (
    <div
      className="container"
      style={{
        background: "green",
        padding: 20,
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ margin: 20 }}>
        Hello from the remote web app (microfrontend) served via Webpack Module
        Federation!
        <br />
        <br />
        This is coming from the host: {data?.id}
      </h2>
    </div>
  );
}

export default HeaderApp;
