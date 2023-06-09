// import Image from "next/image";
import Link from "next/link";

const ProjectBox = ({
  name,
  desc,
  imageURL,
  codeURL,
  demoURL,
}: ProjectType) => {
  return (
    <li className="flex flex-col gap-4 justify-between items-center w-2/3 h-full p-4 bg-slate-200/40 dark:bg-slate-500/20 rounded-sm shadow-md shadow-slate-200 dark:shadow-slate-900 ">
      <h2>{name}</h2>
      <div className="p-10">
        <p>{desc}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 justify-around w-full">
        <Link href={demoURL || "/"} target="_blank">
          Demo
        </Link>
        <Link href={codeURL || "/"} target="_blank" className="bg-cyan-400/20">
          Code
        </Link>
      </div>
    </li>
  );
};

export default ProjectBox;
