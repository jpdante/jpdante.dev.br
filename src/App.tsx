import React from "react";
import Routes from "./routes";
import Background from "./components/Background";

import "./utils/FontAwesome";
import "./utils/FontLoader";
import "./../node_modules/bootstrap/js/src/collapse";

import "./styles/global.scss";
//import "jquery";

function App() {
  return (
    <Background>
      <Routes />
    </Background>
  );
}

export default App;
