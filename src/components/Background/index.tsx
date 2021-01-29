/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode } from "react";
import { GlobalStore } from "../../pullstate/GlobalStore";

import styles from "./Background.module.scss";

type PropType = {
  children?: ReactNode;
};

const Background = (props: PropType) => {
  const isDarkMode = GlobalStore.useState((s) => s.isDarkMode);
  return (
  <div className={`${styles.bg} ${isDarkMode ? styles.bgDark : styles.bgLight}`}>
    {props.children}
  </div>
  );
};

export default Background;
