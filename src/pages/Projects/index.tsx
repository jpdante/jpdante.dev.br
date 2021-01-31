import * as React from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";

//import styles from "./Projects.module.scss";

function Projects() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <div className={`page-content ${isDarkMode ? "dark" : "light"}`}></div>
    </div>
  );
}

export default Projects;
