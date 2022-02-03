import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.scss";
import profilePic from "../images/main/profile-pic.jpg";
import socialLinks from "../lib/social-links";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <div className={styles["about"]}>
        <div className={styles["about-image"]}>
          <Image
            src={profilePic}
            width="250"
            height="250"
            alt="profile"
            className={styles["profile-picture"]}
          />
          <caption className={styles["caption"]}>
            Prince Thind, Web Developer
          </caption>
        </div>
        <div className={styles["about-content"]}>
          {" "}
          <h2>About</h2> <hr className="hr" />
          <p>
            Hello, I am Prince Thind, a Frontend developer and designer. With
            50+ Projects on my github I identify as a competent web developer.
            Though Programming has been my interest since High School, I have
            been working in the field of web development only for over a year
            now. With my 8.5+ CGPA in B.tech CSE(Hons.), I must admit that
            maintaining an excellent Academic record along with a good developer
            profile is not as easy as it seems. Although I might seem very
            active in tech world, I identify as an outgoing introvert, I enjoy
            deep talks I am always looking for someone to collaborate on github
            and other tech fronts. Finally, As a student in his 6th Semester I
            am actively seeking internship opportunites and I look foward to
            connecting to people with similar interests. Please use the links
            below to reach out to me if you wish to connect with me.
          </p>
        </div>
      </div>
      <div className={styles["contact-me"]}>
        <h3>Connect with me!</h3>
        <hr className="hr" />
        <nav>
          <ul className={styles["contact-list"]}>
            {socialLinks.map((media) => {
              return (
                <li key={uniqid()}>
                  <a className={styles["contact-me-item"]} href={media.link}>
                    <FontAwesomeIcon icon={media.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
