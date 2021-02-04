/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import PageFooter from "../../components/PageFooter";
import { GlobalStore } from "../../pullstate/GlobalStore";

import HtcSharp from "../../image/htc.jpg";
import JoyConDriver from "../../image/jcd.jpg";
import LuaBuildEvents from "../../image/lbe.jpg";
import VNS from "../../image/vns.jpg";
import Where2Watch from "../../image/w2w.jpg";

import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);

  return (
    <div className="container">
      <h3 className="text-center text-white mb-3">Projetos</h3>
      <div className={`page-content ${isDarkMode ? "dark" : "light"}`}>
        <div className="d-flex flex-column">
          <div className={`row ${styles.project}`}>
            <div className="col-sm-12 col-lg-6">
              <img
                className={styles.img}
                src={HtcSharp}
                alt="Projeto HtcSharp microframework para desenvolvimento de aplicações web"
              ></img>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="d-flex d-flex justify-content-between">
                <h4>HTCSharp</h4>
                <div>
                  <a
                    className="btn btn-sm btn-github mx-1"
                    href="https://github.com/jpdante/HtcSharp"
                    target="_blank"
                    rel="external"
                  >
                    <FontAwesomeIcon
                      className="fa-l-icon"
                      icon={["fab", "github"]}
                    />
                    GitHub
                  </a>
                </div>
              </div>
              <p>
                MicroFramework e servidor web para desenvolvimento de
                aplicações, baseado no Microsoft ASP.NET Kestrel com suporte a
                plugins e modulos.
              </p>
            </div>
          </div>

          <div className={`row ${styles.project}`}>
            <div className="col-sm-12 col-lg-6 visible-lg">
              <img
                className={styles.img}
                src={JoyConDriver}
                alt="Joy Con Driver plugin para Unreal Engine"
              ></img>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="d-flex d-flex justify-content-between">
                <h4>UE4-JoyConDriver</h4>
                <div>
                  <a
                    className="btn btn-sm btn-github mx-1"
                    href="https://github.com/jpdante/UE4-JoyConDriver"
                    target="_blank"
                    rel="external"
                  >
                    <FontAwesomeIcon
                      className="fa-l-icon"
                      icon={["fab", "github"]}
                    />
                    GitHub
                  </a>
                </div>
              </div>
              <p>
                Este projeto é um plugin para o Unreal Engine 4.25.x que permite
                conectar o Nintendo Switch Joy Cons ao Unreal sem a necessidade
                de um driver e permite que você use seus recursos como
                acelerômetro, giroscópio e IMU.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 hidden-lg">
              <img
                className={styles.img}
                src={JoyConDriver}
                alt="Joy Con Driver plugin para Unreal Engine"
              ></img>
            </div>
          </div>

          <div className={`row ${styles.project}`}>
            <div className="col-sm-12 col-lg-6">
              <img
                className={styles.img}
                src={LuaBuildEvents}
                alt="Lua Build Events programa para automação de eventos pré e pós compilação"
              ></img>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="d-flex d-flex justify-content-between">
                <h4>LuaBuildEvents</h4>
                <div>
                  <a
                    className="btn btn-sm btn-github mx-1"
                    href="https://github.com/jpdante/LuaBuildEvents"
                    target="_blank"
                    rel="external"
                  >
                    <FontAwesomeIcon
                      className="fa-l-icon"
                      icon={["fab", "github"]}
                    />
                    GitHub
                  </a>
                </div>
              </div>
              <p>
                Programa de automação multiplataforma para eventos pré e pós
                build, usando scripts lua com comandos e tipos C#.
              </p>
            </div>
          </div>

          <div className={`row ${styles.project}`}>
            <div className="col-sm-12 col-lg-6">
              <div className="col-sm-12 col-lg-6 visible-lg">
                <img
                  className={styles.img}
                  src={Where2Watch}
                  alt="Where 2 Watch site para descobrir onde assistir séries"
                ></img>
              </div>
              <div className="d-flex d-flex justify-content-between">
                <h4>Where2Watch</h4>
                <div>
                  <a
                    className="btn btn-sm btn-github mx-1"
                    href="https://github.com/jpdante/Where2Watch"
                    target="_blank"
                    rel="external"
                  >
                    <FontAwesomeIcon
                      className="fa-l-icon"
                      icon={["fab", "github"]}
                    />
                    GitHub
                  </a>
                  <a
                    className="btn btn-sm btn-primary mx-1"
                    href="https://where2watch.tk/"
                    target="_blank"
                    rel="external"
                  >
                    <FontAwesomeIcon className="fa-l-icon" icon="globe" />
                    Site
                  </a>
                </div>
              </div>
              <p>
                Projeto de frontend e backend para o desenvolvimento de um site
                que mostra onde assistir séries por país.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 hidden-lg">
              <img
                className={styles.img}
                src={Where2Watch}
                alt="Where 2 Watch site para descobrir onde assistir séries"
              ></img>
            </div>
          </div>

          <div className={`row ${styles.project}`}>
            <div className="col-sm-12 col-lg-6">
              <img className={styles.img} src={VNS} alt="VNS Simulador da máquina de Vonn Neumann"></img>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="d-flex d-flex justify-content-between">
                <h4>VonNeumannSimulator - VNS</h4>
                <div>
                  <a
                    className="btn btn-sm btn-github mx-1"
                    href="https://github.com/jpdante/VonNeumannSimulator"
                    target="_blank"
                    rel="external"
                  >
                    <FontAwesomeIcon
                      className="fa-l-icon"
                      icon={["fab", "github"]}
                    />
                    GitHub
                  </a>
                </div>
              </div>
              <p>
                O VNS permite simular a máquina de Von Neumann e ver os comandos
                da CPU, cada etapa do processo é indicada por uma cor definida
                por um atraso, facilitando a interpretação e compreensão do seu
                funcionamento. Sua finalidade é auxiliar no ensino de como
                funcionaria uma CPU básica, possibilitando o ensino e o
                aprendizado da linguagem de programação assembly da máquina de
                Von Neumann.
              </p>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    </div>
  );
}

export default Projects;
