import Head from "next/head";
import Link from "next/link";
import aboutme from "./assets/aboutme.json";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Paragraphs from "./components/Paragraphs/Paragraphs";
const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About Me</h1>
        <ContactInfo />
        <Paragraphs />
        <Link href="/">Home</Link>
      </main>
    </>
  );
};

export default About;
