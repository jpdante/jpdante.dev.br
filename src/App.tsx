import React, { Suspense } from "react";
import Routes from "./routes";

import Loading from "./pages/Loading";

import "./utils/FontAwesome";

import "./styles/global.scss";
import "bootstrap";
import "jquery";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  );
}

export default App;
