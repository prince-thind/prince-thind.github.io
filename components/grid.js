import Image from "next/image";
import styles from "../styles/Grid.module.scss";
import uniqid from "uniqid";

function Grid({ projects, type }) {
  if (type === "github")
    return (
      <ul className={styles["grid-projects"]}>
        {projects.map((project) => {
          return (
            <li key={uniqid()} className={styles["grid-item-project"]}>
              <h4>{project.name}</h4>
              <a href={project.live_link}>
                {" "}
                <Image
                  className={styles["img"]}
                  src={project.image}
                  height="450"
                  width="800"
                  alt="project"
                />
              </a>
              <a href={project.link} className={styles["source-link"]}>
                View Source on Github
              </a>
            </li>
          );
        })}
      </ul>
    );
  if (type === "certification") {
    return (
      <ul className={styles["grid"]}>
        {projects.map((project) => {
          return (
            <li key={uniqid()} className={styles["grid-item"]}>
              <h4>{project.name}</h4>
              <a href={project.link}>
                {" "}
                <Image
                  src={project.image}
                  height="500"
                  width="500"
                  alt="project"
                />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Grid;
