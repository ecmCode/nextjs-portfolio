import Head from "next/head";
import Link from "next/link";
import ContactInfo from "../../components/about/ContactInfo/ContactInfo";
import Paragraphs from "@/components/about/Paragraphs/Paragraphs";
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
