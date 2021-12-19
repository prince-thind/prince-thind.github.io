import Head from "next/head";
import { useEffect, useState } from "react";
import CollapseBar from "../components/CollapseBar";
import Grid from "../components/grid";
import uniqid from "uniqid";
import skills from "../lib/skills";
import styles from "../styles/Work.module.scss";
import { faBriefcase, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import projectsStatic from "../lib/projects";
import highlightProjects from "../lib/highlightProjects";

export default function Work() {
  const skillsList = Object.keys(skills);

  const [projects, setProjects] = useState({ "loading...": [] });
  const types = Object.keys(projects);

  useEffect(() => {
    (async () => {
      setProjects(await getProjects());
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <section className={styles["work-section"]}>
        <div>
          <FontAwesomeIcon icon={faBriefcase} className={styles["logo"]} />
        </div>
        <div>
          <h2>Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nemo libero magni neque quibusdam pariatur aspernatur mollitia earum
            doloribus! Odit! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Vitae, eaque?
          </p>
        </div>
      </section>
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
      <section className={styles["work-section"]}>
        <div>
          <FontAwesomeIcon icon={faAddressCard} className={styles["logo"]} />
        </div>
        <div>
          <h2>Interested in More?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            esse adipisci? Rerum facilis, maiores doloremque recusandae fugiat
            porro omnis eveniet, aut minima sed, incidunt eos pariatur animi
            ipsam laboriosam soluta.
          </p>
        </div>
      </section>
    </div>
  );
}

async function getProjects() {
  const response=await (await fetch("api/repos-info")).json();
  return response;
}

async function sleep(n) {
  return new Promise((res) => setTimeout(res, n * 1000));
}
