import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer} id="footer">
      <hr />
      <span>&copy; jpdante.dev.br 2021 - {new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;