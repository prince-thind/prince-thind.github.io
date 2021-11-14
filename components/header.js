import Link from "next/link";
import Image from "next/image";
import brandLogo from "../images/brand-logo.png";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.brand}>
            <Image
              src={brandLogo}
              alt="brand logo"
              width="50"
              height="50"
              className="brand-logo"
            />
            <h2>
              Prince
              <br />
              Thind
            </h2>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a className={styles["nav-item"]}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a className={styles["nav-item"]}>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/education">
              <a className={styles["nav-item"]}>Education</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles["nav-item"]}>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
