import Head from "next/head";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import HomeProjects from "./components/HomeProjects";
import HomeTitle from "./components/HomeTitle";
// import { getData } from "@/utility/getData";
import { IPosts } from "@/types/interfaces";
import HomeSubtitle from "./components/HomeSubtitle";
import HomeAboutme from "./components/HomeAboutme";
import HomeStacks from "./components/HomeStacks";
import BlogList from "./components/BlogList/BlogList";
import { usePosts } from "@/hooks/usePosts";

import type { GetStaticProps } from "next";

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
        <HomeTitle>About Me</HomeTitle>
        <HomeAboutme />
        <HomeTitle>Techs</HomeTitle>
        <HomeSubtitle>Stacks</HomeSubtitle>
        <HomeStacks />
        <HomeSubtitle>Projects</HomeSubtitle>
        <HomeProjects />
        <BlogList posts={posts} error={error} isLoading={isLoading} />
        <HomeTitle>Contact Me</HomeTitle>
        <div id="contact">Contact Me</div>
      </main>
    </>
  );
};

export default Home;
