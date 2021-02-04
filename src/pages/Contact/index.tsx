/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import PageFooter from "../../components/PageFooter";
import { GlobalStore } from "../../pullstate/GlobalStore";

import styles from "./Contact.module.scss";

function Contact() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <h3 className="text-center text-white mb-3">Contato</h3>
      <div className={`page-content ${isDarkMode ? "dark" : "light"}`}>
        <h5>
          <strong>E-Mail:</strong>
        </h5>
        <p>
          <a href="mailto:jpdante@tryhosting.com.br">
            jpdante@tryhosting.com.br
          </a>
        </p>
        <h5>
          <strong>LinkedIn:</strong>
        </h5>
        <p>
          <a
            href="https://www.linkedin.com/in/joao-dante/"
            target="_blank"
            rel="external"
          >
            https://www.linkedin.com/in/joao-dante/
          </a>
        </p>
        <h5>
          <strong>GitHub:</strong>
        </h5>
        <p>
          <a href="https://github.com/jpdante" target="_blank" rel="external">
            https://github.com/jpdante
          </a>
        </p>
        <h5>
          <strong>Discord:</strong>
        </h5>
        <p>Ellisiumx#0001</p>
        <PageFooter />
      </div>
    </div>
  );
}

export default Contact;
