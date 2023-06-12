import Head from "next/head";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Aboutme from "./components/Aboutme/Aboutme";
import BlogList from "./components/BlogList/BlogList";
import Techs from "./components/Techs/Techs";
import Contact from "./components/Contact/Contact";
import { usePosts } from "@/hooks/usePosts";

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
        <Techs />
        <BlogList posts={posts} error={error} isLoading={isLoading} />
        <Contact />
      </main>
    </>
  );
};

export default Home;
