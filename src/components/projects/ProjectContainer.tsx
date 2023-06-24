import ProjectBox from "./ProjectBox";

const ProjectContainer = ({ projects }: { projects: ProjectType[] }) => {
  const style =
    "grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center w-full h-auto gap-4 py-10";
  return (
    <ul className={style}>
      {projects?.map((project) => (
        <ProjectBox key={project.name.split(" ").join("-")} {...project} />
      ))}
    </ul>
  );
};

export default ProjectContainer;
