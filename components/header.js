import styles from "../styles/Header.module.scss";
import brandLogo from "../images/main/brand-logo.png";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import uniqid from "uniqid";

export default function Header() {
  const router = useRouter();
  const pages = getPages();

  return (
    <header className={styles.header}>
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
             PRINCE THIND
            </h2>
          </a>
        </Link>
        <ul>
          {pages.map((page) => {
            return (
              <li key={uniqid()}>
                <Link href={page.link}>
                  <a
                    className={
                      styles["nav-item"]
                    }
                  >
                    {page.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}



function getPages() {
  return [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "WORK",
      link: "/work",
    },
    {
      name: "EDUCATION",
      link: "/education",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
  ];
}
