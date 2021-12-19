import styles from "../styles/Grid.module.scss";

import Image from "next/image";
import uniqid from "uniqid";

function Grid({ items }) {
  return (
    <ul className={styles["grid"]}>
      {items.map((project) => {
        return (
          <li key={uniqid()} className={styles["grid-item"]}>
            <h4>{project.name}</h4>
            <a href={project.imageLink}>
              <Image
                className={styles["img"]}
                src={project.image}
                height="450"
                width="800"
                alt="project"
              />
            </a>
            <SourceLink sourceLink={project.sourceLink} />
          </li>
        );
      })}
    </ul>
  );

  function SourceLink({ sourceLink }) {
    if (sourceLink) {
      return (
        <a href={sourceLink} className={styles["source-link"]}>
          View Source Code
        </a>
      );
    }
    return null;
  }
}

export default Grid;
