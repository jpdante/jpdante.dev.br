import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";

import styles from "./Home.module.scss";

function Home() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <div className={`page-content ${isDarkMode ? "light" : "dark"} text-center ${styles.pageMargin}`}>
        <div className={styles.profilePic}>
          <img
            src="https://avatars.githubusercontent.com/u/10143648?s=460&u=6d63e31044d3d93147d259fafe32fc3471c4d7fc&v=4"
            alt="Profile"
          ></img>
        </div>
        <h4>
          <strong>João Pedro Dante</strong>
        </h4>
        <h5 className="text-dev">
          <strong>Desenvolvedor .NET</strong>
        </h5>
      </div>

      <div className={`page-content ${isDarkMode ? "light" : "dark"} ${styles.pageMargin}`}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className={styles.profilePic}>
              <img
                src="https://avatars.githubusercontent.com/u/10143648?s=460&u=6d63e31044d3d93147d259fafe32fc3471c4d7fc&v=4"
                alt="Profile"
              ></img>
            </div>
            <div className="mx-2 inline-block">
              <h4>
                <strong>João Pedro Dante</strong>
              </h4>
              <h5 className="text-dev">
                <strong>Desenvolvedor .NET</strong>
              </h5>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/jpdante"
              className="btn btn-github mx-1"
            >
              <FontAwesomeIcon className="fa-l-icon" icon={["fab", "github"]} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joao-dante/"
              className="btn btn-linkedin mx-1"
            >
              <FontAwesomeIcon
                className="fa-l-icon"
                icon={["fab", "linkedin"]}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={`page-content ${isDarkMode ? "light" : "dark"} ${styles.pageMargin}`}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className={`${styles.profilePic2} ${isDarkMode ? styles.light : styles.dark}`}>
              <img
                src="https://avatars.githubusercontent.com/u/10143648?s=460&u=6d63e31044d3d93147d259fafe32fc3471c4d7fc&v=4"
                alt="Profile"
              ></img>
            </div>
            <div className="mx-2 inline-block">
              <h4>
                <strong>João Pedro Dante</strong>
              </h4>
              <h5 className="text-dev">
                <strong>Desenvolvedor .NET</strong>
              </h5>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/jpdante"
              className="btn btn-github mx-1"
            >
              <FontAwesomeIcon className="fa-l-icon" icon={["fab", "github"]} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joao-dante/"
              className="btn btn-linkedin mx-1"
            >
              <FontAwesomeIcon
                className="fa-l-icon"
                icon={["fab", "linkedin"]}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
