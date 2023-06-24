import Head from "next/head";
import projects from "@/assets/projects.json";
import ProjectContainer from "@/components/projects/ProjectContainer";

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
