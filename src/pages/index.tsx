import Head from "next/head";
import WelcomePage from "@/components/home/WelcomePage/WelcomePage";
import Aboutme from "@/components/home/Aboutme/Aboutme";
import BlogList from "@/components/home/BlogList/BlogList";
import Techs from "@/components/home/Techs/Techs";
import Contact from "@/components/home/Contact/Contact";
import { client } from "@/client";
import type { GetStaticProps } from "next";
import type { PostType } from "@/types/PostType";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
    });
    return {
      props: {
        posts: res.items,
      },
    };
  } catch (e) {
    return {
      props: {
        error: JSON.parse((e as Error).message).message as string,
      },
    };
  }
};

const Home = ({ posts, error }: { posts: PostType[]; error: string }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <WelcomePage />
        <Aboutme />
        <Techs />
        <BlogList posts={posts} error={error} />
        <Contact />
      </main>
    </>
  );
};

export default Home;
