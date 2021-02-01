import * as React from "react";
import PageFooter from "../../components/PageFooter";
import { GlobalStore } from "../../pullstate/GlobalStore";

//import styles from "./Projects.module.scss";

function Projects() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <h3 className="text-center text-white mb-3">Projetos</h3>
      <div className={`page-content ${isDarkMode ? "dark" : "light"}`}>
        <PageFooter />
      </div>
    </div>
  );
}

export default Projects;
