import Head from "next/head";
import CollapseBar from "../components/collapase-bar";
import styles from "../styles/Education.module.scss";
import education from "../lib/education";

export default function Education() {
  return (
    <div>
      <Head>
        <title>Education</title>
      </Head>
      <section>
        <CollapseBar topic="Education">
          <ul className={styles["education-list"]}>
            {education.map((project) => {
              return (
                <li className={styles["education-list-item"]} key={project.id}>
                  <div className={styles["education-institute"]}>
                    <div className={styles["education-main"]}>
                      <div className={styles["education-title"]}>
                        {" "}
                        {project.title}
                      </div>

                      <div className={styles["education-institute-name"]}>
                        ({project["institute"]})
                      </div>
                    </div>
                    <div className={styles["education-institute-duration"]}>
                      {project.duration}
                    </div>
                  </div>
                  <div className={styles["education-institute-grades"]}>
                    {project.grades}
                  </div>
                  <ul className={styles["education-institute-details"]}>
                    {project.points.map((point) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li className={styles["education-institure-points"]}>
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </CollapseBar>
      </section>{" "}
      <section>
        <CollapseBar topic="Certification">
  
        </CollapseBar>
      </section>
    </div>
  );
}
