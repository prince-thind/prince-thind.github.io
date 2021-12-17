import Image from "next/image";
import styles from "../styles/Grid.module.scss";
import uniqid from "uniqid";

function Grid({ items }) {
  return (
    <ul className={styles["grid"]}>
      {items.map((project) => {
        return (
          <li key={uniqid()} className={styles["grid-item"]}>
            <h4>{project.name}</h4>
            <a href={project.imageLink}>
              {" "}
              <Image
                className={styles["img"]}
                src={project.image}
                height="450"
                width="800"
                alt="project"
              />
            </a>
            {project.sourceLink ? (
              <a href={project.sourceLink} className={styles["source-link"]}>
                View Source Code
              </a>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Grid;
