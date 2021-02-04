import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from "../components/NavBar";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
//import About from "../pages/About";
import Contact from "../pages/Contact";
import PullStateStorage from "../pullstate/PullStateStorage";

function Router() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <PullStateStorage />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Projects} path="/projects" />
          {/*<Route exact component={About} path="/about" />*/}
          <Route exact component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
