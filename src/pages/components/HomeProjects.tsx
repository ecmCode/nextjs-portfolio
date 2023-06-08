import Link from "next/link";
import { projects } from "../../utility/projects";
import Container from "./Container";

const HomeProjects = () => {
  return (
    <Container variant="1/3">
      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <li
            key={project.name.replace(" ", "-")}
            className="flex justify-between items-center gap-4 bg-cyan-400/10 py-2 px-6 uppercase tracking-wider select-none hover:brightness-125"
          >
            {project.name}
            <Link
              href={project.demoURL}
              target="_blank"
              className="text-cyan-600 font-semibold underline p-0 bg-transparent underline-offset-4"
            >
              Demo
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default HomeProjects;
