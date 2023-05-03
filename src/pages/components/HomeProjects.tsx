import Link from "next/link";
import {projects} from "../../lib/projects"

const HomeProjects = () => {
    return (
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map(project => (
                <li key={project.name.replace(' ','-')}
                className="flex justify-between gap-4 bg-cyan-400/20 p-2 uppercase tracking-wider select-none"
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