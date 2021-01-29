import React, { Suspense } from "react";
import Routes from "./routes";

import Loading from "./pages/Loading";

import "./utils/FontAwesome";

import "./styles/global.scss";
import "bootstrap";
import "jquery";
import Background from "./components/Background";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Background>
        <Routes />
      </Background>
    </Suspense>
  );
}

export default App;
