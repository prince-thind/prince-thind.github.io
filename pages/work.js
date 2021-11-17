import Head from "next/head";
import projects from "../lib/projects";
import CollapseBar from "../components/collapase-bar";
import Grid from "../components/grid";
import uniqid from "uniqid";

export default function Work() {
  const types = Object.keys(projects);

  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <h2>Projects</h2>
      {types.map((type) => {
        return (
          <CollapseBar topic={type} key={uniqid()}>
            <Grid projects={projects[type]} type="github" />
          </CollapseBar>
        );
      })}
    </div>
  );
}
