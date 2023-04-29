import Image from "next/image";
import Link from "next/link";

const ProjectBox = ({name, desc, imageURL, codeURL, demoURL}: Project) => {
    return (
        <li className="flex flex-col gap-4 justify-between items-center w-2/3 h-full p-10 bg-slate-500/50 rounded-lg">
            {/* <Image alt={imageURL} src={imageURL}/> */}
            <h2>{name}</h2>
            <p>
                {desc}
            </p>
            <div className="flex justify-around w-full">
                <Link href={demoURL || '/'} target="_blank">
                    <button>Demo</button>
                </Link>
                <Link href={codeURL || '/'} target="_blank">
                    <button>Code</button>
                </Link>
            </div>
        </li>
    );
}
 
export default ProjectBox;