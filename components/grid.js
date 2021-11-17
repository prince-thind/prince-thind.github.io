import Image from "next/image";
import styles from "../styles/Grid.module.scss";

function Grid({ projects, type }) {
  if (type === "github")
    return (
      <ul className={styles["grid"]}>
        {projects.map((project, i) => {
          return (
            <li key={i} className={styles["grid-item"]}>
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
  if (type === "certification") {
    return (
      <ul className={styles["grid"]}>
        {projects.map((project, i) => {
          return (
            <li key={i} className={styles["grid-item"]}>
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
