import Head from "next/head";
import Image from "next/image";
import CollapseBar from "../components/collapseBar";
import styles from "../styles/Education.module.scss";
import education from "../lib/education";
import certification from "../lib/certification";
import Grid from "../components/grid";
import { faBookReader, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import class10ResultPic from "../images/achivements/class10Result.png";

export default function Education() {
  return (
    <div >
      <Head>
        <title>Education</title>
      </Head>
      <section className={styles["section"]}>
        <div>
          <FontAwesomeIcon icon={faUniversity } />
        </div>
        <div>
          <h2>Education</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            perferendis quaerat id alias. Delectus reprehenderit facilis aperiam
            ullam distinctio! Et?
          </p>
        </div>
      </section>
      <section className={styles["highlights"]}>
        <h2 className={styles["highlights-heading"]}>Highlights</h2>
        <hr className="hr" />
        <div className={styles["highlights-main-content"]}>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L-lpmGC2si8?start=12"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>Class 12 Result</div>
          </div>
          <div>
            <Image
              src={class10ResultPic}
              alt="class 10 result"
              height={350}
              width={400}
            />
            <div>
              Class 10th Result
            </div>
          </div>
        </div>
      </section>
      <section className={styles["education"]}>
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
                    {project.points.map((point, i) => {
                      return (
                        <li
                          key={i}
                          className={styles["education-institure-points"]}
                        >
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
        <CollapseBar topic="Certification" type="big">
          <Grid items={certification} />
        </CollapseBar>
      </section>
      <section className={styles["section"]}>
        <div>
          <FontAwesomeIcon icon={faBookReader} />
        </div>
        <div>
          <h2>Interested in More?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            perferendis quaerat id alias. Delectus reprehenderit facilis aperiam
            ullam distinctio! Et?
          </p>
        </div>
      </section>
    </div>
  );
}
