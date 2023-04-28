import Link from "next/link";
import projects from "../projects/projects"

const HomeProjects = () => {
    return (
        <ul className="w-1/2 flex justify-between">
            {projects.map(project => (
                <li key={project.name.replace(' ','-')}
                className="flex gap-4 bg-cyan-400/20 p-2"
                >
                    {project.name}
                    <Link href={project.demoURL} target="_blank">
                        <button className="text-cyan-400 font-semibold underline">Demo</button>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
 
export default HomeProjects;