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
    <li className="flex flex-col gap-6 justify-between items-center w-full h-full p-4 bg-slate-200/40 dark:bg-slate-400/10 card">
      <h2>{name}</h2>
      <div className="p-10">
        <p>{desc}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch md:items-center w-full">
        <Link href={demoURL || "/"} target="_blank" className="btn btn-action">
          Demo
        </Link>
        <Link
          href={codeURL || "/"}
          target="_blank"
          className="btn btn-secondary"
        >
          Code
        </Link>
      </div>
    </li>
  );
};

export default ProjectBox;
