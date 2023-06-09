import Link from "next/link";
import aboutme from "../about/assets/aboutme.json";
import Container from "./Container";

const HomeAboutme = () => {
  return (
    <Container variant="2/3">
      <div className="px-10 md:px-40 py-10 flex flex-col gap-6">
        {aboutme &&
          aboutme.slice(0, 3).map((p, index) => <p key={index}>{p}</p>)}
        <div className="text-right">
          <Link href="/about/#top">Read More</Link>
        </div>
      </div>
    </Container>
  );
};

export default HomeAboutme;
