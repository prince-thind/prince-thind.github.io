import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.scss";
import profilePic from "../images/profile-pic.jpg";
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
        <div>
          <Image
            src={profilePic}
            width="500"
            height="500"
            alt="profile"
            className={styles["profile-picture"]}
          />
          <caption className={styles["caption"]}>
            Prince Thind, Web Developer
          </caption>
        </div>
        <div className={styles["about-content"]}>
          {" "}
          <h2>About</h2> <hr className={styles["hr"]} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            odio quam alias quos hic adipisci repellendus perspiciatis laborum.
            Vel placeat aliquid cupiditate mollitia pariatur, porro aspernatur
            sapiente possimus doloremque aliquam ab quibusdam quidem delectus
            eos, corporis cumque facilis. Et asperiores sapiente quisquam quod
            nemo, debitis eos, cum aspernatur nulla labore, aliquid sequi fuga
            eius modi! Nobis beatae animi eum expedita recusandae voluptate
            iure, incidunt laborum amet aut placeat accusantium cumque facere
            eos quidem dolore et ipsum, nulla natus perferendis iusto dicta
            praesentium maxime consequuntur? Suscipit nisi, quod minus placeat
            esse qui accusamus accusantium sunt minima consectetur. Magni
            laudantium quam iste unde dolorum recusandae necessitatibus id
            soluta eius cupiditate, quo ut ducimus aspernatur at. Sed, iusto
            asperiores. Ipsa, eaque? Nemo atque aliquid minus laborum veniam
            quibusdam labore porro quia. Officiis molestiae error eaque
            asperiores sequi cupiditate dolores, dolorum impedit totam quisquam.
            Quae adipisci deleniti beatae nam esse incidunt, in explicabo
            possimus repudiandae. Eaque quibusdam accusantium nemo optio,
            voluptate dolorum debitis libero quae veniam quaerat mollitia
            excepturi, aut neque? Saepe, distinctio! Velit tenetur saepe
            temporibus ex earum aperiam quae itaque aut, odio inventore. Libero
            eligendi ipsum quisquam quasi sunt vel, quidem quos animi ducimus
            facilis consequuntur aliquid labore voluptates dignissimos beatae.
            Modi.
          </p>
        </div>
      </div>
      <div className={styles["contact-me"]}>
        <h3>Connect with me!</h3>
        <hr className={styles["hr"]} />
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
