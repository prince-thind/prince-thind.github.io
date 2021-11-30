import Link from "next/link";
import Image from "next/image";
import brandLogo from "../images/brand-logo.png";
import styles from "../styles/Header.module.scss";
import { useState } from "react";
import CustomLink from "./CustomLink";
import uniqid from "uniqid";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const pages = [
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
              <CustomLink
                key={uniqid()}
                linkInfo={{ ...page }}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
