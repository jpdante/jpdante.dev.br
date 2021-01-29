import * as React from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";

import styles from "./About.module.scss";

function About() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <div className={`page-content ${isDarkMode ? "light" : "dark"}`}></div>
    </div>
  );
}

export default About;
