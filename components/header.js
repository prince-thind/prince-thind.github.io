import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">
              <a className={styles["nav-item"]}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className={styles["nav-item"]}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/education">
              <a className={styles["nav-item"]}>Education</a>
            </Link>
          </li>
          <li>
            <Link href="/achievements">
              <a className={styles["nav-item"]}>Achievements</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles["nav-item"]}>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
