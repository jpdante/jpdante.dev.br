import * as React from "react";
import PageFooter from "../../components/PageFooter";
import { GlobalStore } from "../../pullstate/GlobalStore";

//import styles from "./About.module.scss";

function Contact() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <h3 className="text-center text-white mb-3">Contato</h3>
      <div className={`page-content ${isDarkMode ? "dark" : "light"}`}>
        <PageFooter />
      </div>
    </div>
  );
}

export default Contact;
