import * as React from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container">
        <a className="navbar-brand" href="#df">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default App;
