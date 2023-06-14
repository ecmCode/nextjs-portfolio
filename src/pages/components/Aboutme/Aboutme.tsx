import Link from "next/link";
import aboutme from "../../about/assets/aboutme.json";
import Container from "../Container";
import Title from "../Title";

const Aboutme = () => {
  return (
    <>
      <Title>About Me</Title>
      <Container variant="2/3">
        <div className="px-6 lg:px-20 py-10 flex flex-col gap-6">
          {aboutme &&
            aboutme.slice(0, 3).map((p, index) => <p key={index}>{p}</p>)}
          <div className="text-center md:text-right my-4">
            <Link href="/about">Read More</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Aboutme;
