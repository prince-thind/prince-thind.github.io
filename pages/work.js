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
      <CollapseBar topic="Projects" type="big">
      {types.map((type) => {
        return (
          <CollapseBar topic={type} key={uniqid()} type="children">
            <Grid projects={projects[type]} type="github" />
          </CollapseBar>
        );
      })}
      </CollapseBar>
    </div>
  );
}
