import ProjectBox from "./ProjectBox";

interface Props {
    projects : Project[]
}

const ProjectContainer = ({projects}: Props) => {
    return ( 
        <ul className="grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center w-full h-auto gap-4 py-10">
            {projects && projects.map((project, index) => (
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
     );
}
 
export default ProjectContainer;