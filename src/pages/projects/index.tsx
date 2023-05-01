import Head from "next/head";
import {projects} from "../../lib/projects";
import ProjectBox from "./components/ProjectBox";


const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main>
                <h1>Projects</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center w-full h-60 gap-4">
                    {projects.map((project, index) => (
                        <ProjectBox
                            key={index}
                            name={project.name}
                            desc={project.desc}
                            imageURL={project.imageURL}
                            codeURL={project.codeURL}
                            demoURL={project.demoURL}
                        />
                    ))}
                </ul>
            </main>
        </>
    );
}
 
export default Projects;