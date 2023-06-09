import Head from "next/head";
import { projects } from "../../utility/projects";
import ProjectBox from "./components/ProjectBox";
import ProjectContainer from "./components/ProjectContainer";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <main>
        <h1>Projects</h1>
        <ProjectContainer projects={projects} />
      </main>
    </>
  );
};

export default Projects;
