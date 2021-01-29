import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from "../components/NavBar";

const Home = React.lazy(() => import("../pages/Home"));

function Router() {
  return (
    <div className="wrapper">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;

/*

<Route component={Channel} path="/channel/" />
<Route component={Watch} path="/watch/" />

*/