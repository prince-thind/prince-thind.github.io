import Head from "next/head";
import projects from "../lib/projects";
import CollapseBar from "../components/CollapseBar";
import Grid from "../components/grid";
import uniqid from "uniqid";
import skills from "../lib/skills";
import styles from "../styles/Work.module.scss";


export default function Work() {
  const types = Object.keys(projects);
  const skillsList = Object.keys(skills);

  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <CollapseBar topic="Projects" type="big">
        {types.map((type) => {
          return (
            <CollapseBar topic={type} key={uniqid()} type="children">
              <Grid projects={projects[type]} type="github" />
            </CollapseBar>
          );
        })}
      </CollapseBar>
      <CollapseBar topic="Skills" type="big">
        {skillsList.map((skill) => {
          return (
            <CollapseBar topic={skill} key={uniqid()} type="children">
              <ul className={styles["skills-list"]}>
                {skills[skill].map((subSkill) => {
                  return <li key={uniqid()}>{subSkill}</li>;
                })}
              </ul>
            </CollapseBar>
          );
        })}
      </CollapseBar>
    </div>
  );
}
