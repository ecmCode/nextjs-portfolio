import Link from "next/link";
import projects from "@/assets/projects.json";
import Container from "../Container/Container";
import Subtitle from "../Titles/Subtitle";
import style from "./ProjectList.module.css";
import Image from "next/image";
import img from "./code.jpg";
const ProjectList = () => {
  return (
    <>
      <Subtitle>Projects</Subtitle>
      <Container variant="2/3">
        <ul className={style.list}>
          {(projects as ProjectType[])?.map((project) => (
            <li
              key={project.name.replace(" ", "-")}
              className="card card-project"
            >
              <div className={style.item}>
                <h4 className={style.title}>{project.name}</h4>
                <div className={style.imgContainer}>
                  <Image
                    src={img}
                    alt={"project image"}
                    className={style.img}
                    quality={100}
                    width={600}
                    height={600}
                  />

                  <div className={style.btns}>
                    <Link
                      href={project.demoURL}
                      target="_blank"
                      className="btn btn-action"
                    >
                      Demo
                    </Link>
                    <Link
                      href={project.codeURL}
                      target="_blank"
                      className="btn btn-secondary"
                    >
                      Code
                    </Link>
                  </div>
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
