import styles from "../styles/Home.module.scss";

import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Resume() {
  return (
    <a className={styles.resume} href="https://github.com/prince-thind/resume/raw/master/CV.pdf" download>
      Download CV
      <FontAwesomeIcon
        icon={faArrowCircleDown}
        className={styles["download-icon"]}
      />
    </a>
  );
}

export default Resume;
