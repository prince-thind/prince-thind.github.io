import Head from "next/head";
import CollapseBar from "../components/CollapseBar";
import styles from "../styles/Education.module.scss";
import education from "../lib/education";
import certification from "../lib/certification";
import Grid from '../components/grid'

export default function Education() {
  return (
    <div>
      <Head>
        <title>Education</title>
      </Head>
      <section>
        <CollapseBar topic="Education" type="big">
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
                    {project.points.map((point,i) => {
                      return (
                        <li key={i} className={styles["education-institure-points"]}>
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
        <CollapseBar topic="Certification" type="big">
       <Grid type="certification" projects={certification}/>
        </CollapseBar>
      </section>
    </div>
  );
}
