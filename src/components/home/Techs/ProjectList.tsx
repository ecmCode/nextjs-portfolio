import Link from "next/link";
import projects from "@/assets/projects.json";
import Container from "../Container/Container";
import Subtitle from "../Titles/Subtitle";
import style from "./ProjectList.module.css";
import Image from "next/image";
import img from "./code.jpg"
const ProjectList = () => {
  return (
    <>
      <Subtitle>Projects</Subtitle>
      <Container variant="1/3">
        <ul className={style.list}>
          {(projects as ProjectType[])?.map((project) => (
            <li key={project.name.replace(" ", "-")} className={style.item}>
              <h4 className={style.title}>{project.name}</h4>
              <div className={style.imgContainer}>
                <Image src={img} alt={"project image"} className={style.img} quality={100} width={600} height={600}/>
            
                <div className={style.btns}>
                  <Link
                    href={project.demoURL}
                    target="_blank"
                    className={style.demo}
                  >
                    Demo
                  </Link>
                  <Link
                    href={project.codeURL}
                    target="_blank"
                    className={style.code}
                  >
                    Code
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ProjectList;
