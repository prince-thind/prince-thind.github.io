import Head from "next/head";
import CollapseBar from "../components/collapseBar";
import Link from "next/link";
import Grid from "../components/grid";
import uniqid from "uniqid";
import skills from "../lib/skills";
import styles from "../styles/Work.module.scss";
import { faBriefcase, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { default as fetchProjects } from "../lib/fetchProjects";
import { images as projectImages } from "../lib/projects";

export default function Work({ projects }) {
  const skillsList = Object.keys(skills);
  const types = Object.keys(projects);
  const highlightProjects = [];
  for (const category in projects) {
    const categoryProjects = projects[category];
    highlightProjects.push(...categoryProjects.filter((e) => e.highlights));
  }

  addImages(projects);

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
            Hello, This is my Work Page. Here, you will find live links to my
            web projects and also their Source links on github. This page also
            lists some on my skills that I have acquired over the course of my
            dev journey.
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
            You can always check out my{" "}
            <a href="https://github.com/Prince-Thind">Github</a> to see all my
            projects and work I have done over the years. If you wish to
            collaborate with me or perhaps contact me consider visitng my{" "}
            <Link href="/about">
              <a>About</a>
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const projects = JSON.parse(await fetchProjects());
  return {
    props: { projects },
    revalidate: 60 * 60 * 24 * 7, // 7 days in seconds
  };
};

function addImages(projects) {
  for (const category in projects) {
    for (const item of projects[category]) {
      item.image = projectImages[item.id];
    }
  }
}
