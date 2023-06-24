import Head from "next/head";
import WelcomePage from "@/components/home/WelcomePage/WelcomePage";
import Aboutme from "@/components/home/Aboutme";
import BlogList from "@/components/home/BlogList/BlogList";
import Techs from "@/components/home/Techs/Techs";
import Contact from "@/components/home/Contact/Contact";
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
