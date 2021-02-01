/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const App = () => {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          João Pedro Dante
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <li className="nav-item mr-3">
              <NavLink to="/" exact>
                Início
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink to="/projects">Projetos</NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink to="/about">Sobre</NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink to="/contact">Contato</NavLink>
            </li>
            <li className="nav-item mr-3">
              <a
                className="nav-link"
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  GlobalStore.update((data) => {
                    data.isDarkMode = !data.isDarkMode;
                    return data;
                  });
                }}
              >
                <FontAwesomeIcon
                  icon="adjust"
                  rotation={isDarkMode ? 180 : undefined}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default App;
