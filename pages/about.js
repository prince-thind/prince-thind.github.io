import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.scss";
import profilePic from "../images/profile-pic.jpg";
import socialLinks from "../lib/social-links";
import uniqid from "uniqid";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
     
      <div className={styles["about"]}>
        <div>
        <Image src={profilePic} width="500" height="500" alt="profile" />

        </div>
        <div className={styles["about-content"]}>  <h2>About</h2> <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          tenetur ab dolore unde repellat fugiat enim delectus minus incidunt
          iste hic sit eius, culpa voluptatum odit perferendis officiis. Maxime,
          cum nulla dignissimos fugit ipsa vitae quasi temporibus beatae veniam
          distinctio quod! Dicta nobis et quaerat repellendus, mollitia
          voluptates dolor totam voluptatum, error sapiente aut excepturi odio
          harum reiciendis placeat. Atque adipisci autem aperiam nobis, quos
          architecto, inventore amet recusandae eius enim molestias distinctio
          eveniet maxime, impedit voluptatum veniam neque? Itaque repellendus
          qui harum quidem impedit, saepe voluptatum expedita magnam laudantium?
          Dicta vitae odit repellat sapiente voluptates animi dolorum ea et, sed
          rem corporis sunt, placeat nam at aspernatur similique, sequi
          laboriosam nemo. Fuga iste odio autem veniam consequatur a tempora
          corporis error libero vero. Rerum eum quam minima error id enim
          laborum obcaecati? Labore magni dolorem fugiat maiores deleniti,
          reprehenderit enim amet, cum iusto ex consequuntur temporibus atque
          eaque nihil cumque assumenda neque rerum! Soluta pariatur excepturi
          tenetur tempora aspernatur, nesciunt provident porro iusto ratione
          modi quasi impedit eveniet alias ex quos quam voluptatem rem est natus
          sapiente facere omnis? Minima blanditiis error est accusantium
          asperiores laudantium qui veritatis dolorem. Delectus in veritatis
          repellendus at perferendis illo, sint cumque modi!
        </p></div>
      
      </div>
      <h3>Connect with me!</h3>
      <nav>
        <ul className={styles["contact-me"]}>
          {socialLinks.map((media) => {
            return (
              <li key={uniqid()}>
                <a className={styles["contact-me-item"]} href={media.link}>
                  {media.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
