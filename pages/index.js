import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../images/brand-logo.png";

export default function Home() {
  return (
    <>
      <section className={styles.intro}>
        <h1>Hi, I am Prince Thind</h1>
        <h2>A Full Stack Web Developer</h2>
        <hr />
      </section>
      <section className={styles["main-section"]}>
        <Image
          src={profilePic}
          alt="profile picture"
          height="150"
          width="150"
        />
        <div className={styles["details"]}>
          <p>Hello, I am Prince Thind, a Full Stack web developer and Programmer working to create the best websites with modern technologies like React and ExpressJS. Visit my Dedicated <Link href="/about"><a>about</a></Link> Page to know more about me.</p>
          <ul>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/education">
                <a>Education</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <a href="https://github.com/Prince-Thind">Github</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
