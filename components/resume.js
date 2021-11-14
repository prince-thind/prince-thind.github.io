import styles from "../styles/Home.module.scss";

function Resume() {
  return (
    <a className={styles.resume} href="/CV.pdf" download>
      Download CV
    </a>
  );
}

export default Resume;
