import Head from "next/head";
import CollapseBar from "../components/CollapseBar";
import Grid from "../components/grid";
import uniqid from "uniqid";
import skills from "../lib/skills";
import styles from "../styles/Work.module.scss";
import { faBriefcase as Icon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import projects from "../lib/projects";
import highlightProjects from "../lib/highlightProjects";

export default function Work() {
  const types = Object.keys(projects);
  const skillsList = Object.keys(skills);

  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <div className={styles["work-section"]}>
        <div>
          <FontAwesomeIcon icon={Icon} className={styles["logo"]} />
        </div>
        <section className={styles["work-description"]}>
          <h1>Work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nemo libero magni neque quibusdam pariatur aspernatur mollitia earum
            doloribus! Odit! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Vitae, eaque?
          </p>
        </section>
      </div>
      <section className={styles["highlights"]}>
        <h2 className={styles["highlights-heading"]}>Highlights</h2>
        <hr className="hr" />
        <Grid items={highlightProjects}></Grid>
      </section>
      <section className={styles["collapse-bars"]}>
        <CollapseBar topic="Projects">
          {types.map((type) => {
            return (
              <CollapseBar topic={type} key={uniqid()} type="child">
                <Grid items={projects[type]} />
              </CollapseBar>
            );
          })}
        </CollapseBar>
        <CollapseBar topic="Skills">
          {skillsList.map((skill) => {
            return (
              <CollapseBar topic={skill} key={uniqid()} type="child">
                <ul className={styles["skills-list"]}>
                  {skills[skill].map((subSkill) => {
                    return <li key={uniqid()}>{subSkill}</li>;
                  })}
                </ul>
              </CollapseBar>
            );
          })}
        </CollapseBar>
      </section>
    </div>
  );
}
