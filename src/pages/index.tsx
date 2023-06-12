import Head from "next/head";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import HomeProjects from "./components/HomeProjects";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Aboutme from "./components/Aboutme";
import StackList from "./components/StackList";
import BlogList from "./components/BlogList/BlogList";
import { usePosts } from "@/hooks/usePosts";

// import type { GetStaticProps } from "next";
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getData();
//   return {
//     props: {
//       posts: data.slice(0, 4),
//     },
//   };
// };

const Home = () => {
  const { data: posts, error, isLoading } = usePosts(4);
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <WelcomePage />
        <Aboutme />
        <Title>Techs</Title>
        <Subtitle>Stacks</Subtitle>
        <StackList />
        <Subtitle>Projects</Subtitle>
        <HomeProjects />
        <BlogList posts={posts} error={error} isLoading={isLoading} />
        <Title>Contact Me</Title>
        <div id="contact">Contact Me</div>
      </main>
    </>
  );
};

export default Home;
