import Link from "next/link";
import aboutme from "@/assets/aboutme.json";
import Container from "../Container/Container";
import Title from "../Titles/Title";

const Aboutme = () => {
  return (
    <>
      <Title>About Me</Title>
      <Container variant="2/3">
        <div className="px-0 sm:px-10 lg:px-20 py-6 lg:py-10 flex flex-col gap-6">
          {aboutme &&
            aboutme.slice(0, 3).map((p, index) => <p key={index}>{p}</p>)}
          <div className="text-center my-4 flex flex-col items-stretch sm:items-end">
            <Link href="/about">Read More</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Aboutme;
