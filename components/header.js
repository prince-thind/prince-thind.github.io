import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import uniqid from "uniqid";
import styles from "../styles/Header.module.scss";
import brandLogo from "../images/brand-logo.png";

export default function Header() {
  const router = useRouter();
  const pages = getPages();

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
          {pages.map((page) => {
            return (
              <li key={uniqid()}>
                <CustomLink
                  isActive={router.pathname === page.link ? true : false}
                  page={page}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function CustomLink({ isActive, page }) {
  return (
    <Link href={page.link}>
      <a
        className={
          styles["nav-item"] + (isActive ? ` ${styles["active"]}` : "")
        }
      >
        {page.name}{" "}
      </a>
    </Link>
  );
}

function getPages() {
  return [
    {
      name: "home",
      link: "/",
    },
    {
      name: "work",
      link: "/work",
    },
    {
      name: "education",
      link: "/education",
    },
    {
      name: "about",
      link: "/about",
    },
  ];
}
