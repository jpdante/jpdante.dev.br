/* eslint-disable react/jsx-no-target-blank */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStore } from "../../pullstate/GlobalStore";
import ProfilePicture from "../../image/profile.jpg";
import UAM from "../../image/uam.png";

import styles from "./Home.module.scss";

function Home() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <div
        className={`page-content ${styles.homePage} ${
          isDarkMode ? "dark" : "light"
        } ${isDarkMode ? styles.dark : styles.light}`}
      >
        <ProfileInfo />

        <Resume />

        <hr />
        <AcademicFormation />

        <hr />
        <Languages />

        <hr />
        <Skills />
      </div>
    </div>
  );
}

function AcademicFormation() {
  return (
    <div>
      <h3 className="text-center poppins-bold text-dev">Formação Acadêmica</h3>
      <div className={styles.academicItem}>
        <div className={styles.academicIcon}>
          <img
            src={UAM}
            alt="Profile"
          ></img>
        </div>
        <div className={styles.academicInfo}>
          <h5>Universidade Anhembi Morumbi (UAM)</h5>
          <h6>Bacharel em Ciência da Computação</h6>
          <small>2019-02 - Atualmente</small>
        </div>
      </div>
    </div>
  );
}

function ProfileInfo() {
  return (
    <div>
      <div className="hidden-md">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="d-flex item">
            <div className={styles.profilePic}>
              <img
                src={ProfilePicture}
                alt="Profile"
              ></img>
            </div>
            <div className="mx-2">
              <h4>
                <strong>João Pedro Dante</strong>
              </h4>
              <h5 className="text-dev">
                <strong>Desenvolvedor Full Stack</strong>
              </h5>
            </div>
          </div>

          <div className="item text-center">
            <a
              className="btn btn-github mx-1"
              href="https://github.com/jpdante"
              target="_blank"
              rel="external"
            >
              <FontAwesomeIcon className="fa-l-icon" icon={["fab", "github"]} />
              GitHub
            </a>
            <a
              className="btn btn-linkedin mx-1"
              href="https://www.linkedin.com/in/joao-dante/"
              target="_blank"
              rel="external"
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

      <div className="visible-md text-center">
        <div className={styles.profilePic}>
          <img
            src={ProfilePicture}
            alt="Profile"
          ></img>
        </div>
        <div className="my-2">
          <h4>
            <strong>João Pedro Dante</strong>
          </h4>
          <h5 className="text-dev">
            <strong>Desenvolvedor Full Stack</strong>
          </h5>
        </div>
        <div className="item text-center">
          <a
            className="btn btn-github mx-1"
            href="https://github.com/jpdante"
            target="_blank"
            rel="external"
          >
            <FontAwesomeIcon className="fa-l-icon" icon={["fab", "github"]} />
            GitHub
          </a>
          <a
            className="btn btn-linkedin mx-1"
            href="https://www.linkedin.com/in/joao-dante/"
            target="_blank"
            rel="external"
          >
            <FontAwesomeIcon className="fa-l-icon" icon={["fab", "linkedin"]} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div id="resume" className={styles.resume}>
      Programador Full Stack apaixonado por aprender novas tecnologias e viciado
      em programação, sempre procurando formas de melhorar o código e otimizar
      sua eficiência. Com mais de 4 anos de experiencia em desenvolvimento de
      softwares, sistemas e interfaces gráficas e com conhecimento sobre as
      linguagens e tecnologias mais usadas no mercado. Atualmente cursando
      Ciência da Computação na Universidade Anhembi Morumbi e Top 50 no ranking
      de desenvolvedores C# no Brasil pela CodersRank.
    </div>
  );
}

function Skills() {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-6" id="SoftSkills">
        <h3 className="text-center poppins-bold text-light-blue">
          Soft Skills
        </h3>
        <div className="d-flex flex-column text-center">
          <div className="item">
            <h5>{">"} Test 1</h5>
          </div>
          <div className="item">
            <h5>{">"} Test 1</h5>
          </div>
          <div className="item">
            <h5>{">"} Test 1</h5>
          </div>
          <div className="item">
            <h5>{">"} Test 1</h5>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6" id="HardSkills">
        <h3 className="text-center poppins-bold text-light-blue">
          Hard Skills
        </h3>
        <div className="d-flex flex-column text-center">
          <div className="item">
            <h5>{">"} Test 2</h5>
          </div>
          <div className="item">
            <h5>{">"} Test 2</h5>
          </div>
          <div className="item">
            <h5>{">"} Test 2</h5>
          </div>
          <div className="item">
            <h5>{">"} Test 2</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

function Languages() {
  return (
    <div>
      <h3 className="text-center poppins-bold text-pink">Linguagens</h3>
      <div id="languages" className={`row ${styles.languages}`}>
        <div className={`col-6 col-md-3 col-lg-3 ${styles.languageItem}`}>
          <div
            className={`${styles.circleContainer} ${styles.dark} animated fadeInUp ${styles.c1}`}
          >
            <div className={`${styles.circle}`}>
              <svg viewBox="0 0 128 128">
                <g fill="#ededed">
                  <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zm51-41.5h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.5v-5h3.5l.9-4h-4.4v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zM102.3 66h3.8l.9-4h-3.8z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div
            className={`${styles.languageDescription} animated fadeIn ${styles.c3}`}
          >
            <p>Conhecimento:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
            </span>
            <p>Experiência:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
            </span>
          </div>
        </div>
        <div className={`col-6 col-md-3 col-lg-3 ${styles.languageItem}`}>
          <div
            className={`${styles.circleContainer} animated fadeInUp ${styles.c2}`}
          >
            <div className={styles.circle}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#ededed"
                  d="M53.595 67.817c-13.224 3.694 8.044 11.325 24.88 4.112-2.757-1.071-4.735-2.309-4.735-2.309-7.508 1.419-10.99 1.531-17.805.753-5.625-.644-2.34-2.556-2.34-2.556zM76.459 60.61c-9.95 1.915-15.698 1.854-22.979 1.103-5.629-.582-1.944-3.311-1.944-3.311-14.563 4.834 8.106 10.318 28.459 4.365-2.162-.761-3.536-2.157-3.536-2.157zM84.258 18.879s-29.439 7.351-15.38 23.552c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.518-6.349-7.982-9.502 10.772-20.378zM37.48 81.305c34.324 5.563 62.567-2.506 53.666-6.523 0 0 2.431 2.005-2.679 3.555-9.715 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.404-22.055 4.718-9.469 6.761zM79.348 53.885c1.65-1.126 3.93-2.104 3.93-2.104s-6.492 1.161-12.961 1.704c-7.918.664-16.412.795-20.676.225-10.095-1.35 5.534-5.063 5.534-5.063s-6.07-.411-13.533 3.199c-8.827 4.269 21.832 6.214 37.706 2.039zM83.213 64.317c-.074.2-.322.425-.322.425 21.546-5.664 13.624-19.965 3.322-16.345-.903.319-1.378 1.063-1.378 1.063s.571-.23 1.845-.496c5.207-1.084 12.669 6.972-3.467 15.353zM65.006 48.492c-3.179-7.186-13.957-13.471.005-24.498 17.41-13.742 8.476-22.682 8.476-22.682 3.604 14.197-12.711 18.486-18.6 27.328-4.01 6.024 1.969 12.499 10.119 19.852zM83.796 84.143c-13.219 2.488-29.524 2.199-39.191.603 0 0 1.98 1.64 12.157 2.294 15.484.99 39.269-.551 39.832-7.878 0-.001-1.082 2.776-12.798 4.981zM51.131 99.535c-2.887 0-5.351.714-7.408 1.622l.624 2.493c1.619-.595 3.618-1.147 5.674-1.147 2.85 0 3.979 1.147 3.979 3.521v1.976h-1.2c-6.921 0-10.044 2.585-10.044 6.624 0 3.479 2.059 5.407 5.933 5.407 2.49 0 4.351-.845 6.088-2.35l.316 2.319h2.907v-14.492c0-3.599-1.924-5.973-6.869-5.973zm2.869 15.502c-1 1.266-2.893 1.978-4.279 1.978-1.973 0-2.988-1.371-2.988-3.27 0-2.056 1.202-3.745 5.794-3.745h1.473v5.037zM69.611 115.681l-.835-3.608-3.756-12.073h-4.39l6.051 20h5.026c2.884-7 4.943-14 6.086-20h-4.271c-.671 5-2.016 10.424-3.911 15.681zM88.015 99.535c-2.889 0-5.411.714-7.467 1.622l.596 2.493c1.621-.595 3.722-1.147 5.778-1.147 2.846 0 4.078 1.147 4.078 3.521v1.976h-1.428c-6.923 0-10.045 2.585-10.045 6.624 0 3.479 2.056 5.407 5.93 5.407 2.492 0 4.349-.845 6.091-2.35l.318 2.319h3.134v-14.492c0-3.599-2.044-5.973-6.985-5.973zm-1.411 17.462c-1.975 0-3.046-1.363-3.046-3.261 0-2.055 1.149-3.736 5.736-3.736h1.706v5h-.067c-1.465 1-2.947 1.997-4.329 1.997zM36 115.373c0 3.271-.445 4.638-.979 5.701-.615 1.193-2.053 2.475-3.601 3.269l1.934 2.345c2.032-.749 3.943-2.078 5.092-3.757 1.15-1.723 1.554-3.491 1.554-7.867v-22.064h-4v22.373z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className={`${styles.languageDescription} animated fadeIn ${styles.c4}`}
          >
            <p>Conhecimento:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
            </span>
            <p>Experiência:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
            </span>
          </div>
        </div>
        <div className={`col-6 col-md-3 col-lg-3 ${styles.languageItem}`}>
          <div
            className={`${styles.circleContainer} animated fadeInUp ${styles.c3}`}
          >
            <div className={`${styles.circle}`}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#ededed"
                  d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-35.5 32.5v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zm29.7 14h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className={`${styles.languageDescription} animated fadeIn ${styles.c5}`}
          >
            <p>Conhecimento:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
            </span>
            <p>Experiência:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
            </span>
          </div>
        </div>
        <div className={`col-6 col-md-3 col-lg-3 ${styles.languageItem}`}>
          <div
            className={`${styles.circleContainer} animated fadeInUp ${styles.c4}`}
          >
            <div className={styles.circle}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#ededed"
                  d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className={`${styles.languageDescription} animated fadeIn ${styles.c6}`}
          >
            <p>Conhecimento:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
            </span>
            <p>Experiência:</p>
            <span className="text-pink">
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["fas", "star"]} />
              <FontAwesomeIcon className="fa-l-icon" icon={["far", "star"]} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
