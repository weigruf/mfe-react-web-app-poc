import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("HeaderApp/HeaderApp"));

function HomeApp() {
  return (
    <div
      className="container"
      style={{
        background: "#EEE",
        padding: 100,
        margin: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        textAlign: "left",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "#1E1F4D", margin: 20 }}>
        This is the Host web app, the home web app (microfrontend) that will
        consume the Remote(s) web app(s) served via Webpack Module Federation!
      </h1>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header data={{ id: "theIdFromTheHost" }} />
      </Suspense>
    </div>
  );
}

export default HomeApp;
