import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Resume from "../components/resume";
import profilePic from "../images/main/profile-pic.jpg";
import { faExternalLinkAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.intro}>
        <h1>
          Hi, I am <span>Prince Thind</span>
        </h1>
        <h2>A Junior Web Developer</h2>
        <hr className={`hr ${styles["hr"]}`} />
        <Resume />
      </section>
      <section className={styles["main-section"]}>
        <Image
          src={profilePic}
          alt="profile picture"
          height="200"
          width="200"
          className={styles["img"]}
        />
        <div className={styles["brief"]}>
          <h3>About me</h3>
          <div className={styles["details"]}>
            <p>
              Hello, I am Prince Thind, a junior web developer and
              Programmer working to create the best websites with modern
              technologies like React and ExpressJS. Currently, I am Pursuing B.Tech CSE(Hons.)
              at{" "}
              <a href="https://www.lpu.in/">
                Lovely Professional University, India,
              </a>{" "}
              and actively Looking for Internship opportunities. Visit the
              following pages to know more about me.
            </p>
            <ul className={styles["details-list"]}>
              <li>
                <Link href="/work">
                  <a>
                    work <FontAwesomeIcon icon={faLink} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/education">
                  <a>
                    Education <FontAwesomeIcon icon={faLink} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    About <FontAwesomeIcon icon={faLink} />
                  </a>
                </Link>
              </li>
              <li>
                <a href="https://github.com/Prince-Thind">
                  Github <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
