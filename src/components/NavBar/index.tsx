/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./NavLink";

const App = () => {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);
  const rotation = 0;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#df">
          João Pedro Dante
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

        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item mr-3">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item mr-3">
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                GlobalStore.update((data) => {
                  data.isDarkMode = !data.isDarkMode;
                  return data;
                });
              }}
            >
              <FontAwesomeIcon icon="adjust" rotation={isDarkMode ? 180 : undefined} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default App;
