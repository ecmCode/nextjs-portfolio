import Head from "next/head";
import WelcomePage from "@/components/home/WelcomePage/WelcomePage";
import Aboutme from "@/components/home/Aboutme/Aboutme";
import BlogList from "@/components/home/BlogList/BlogList";
import Techs from "@/components/home/Techs/Techs";
import Contact from "@/components/home/Contact/Contact";
import Footer from "@/components/home/Footer/Footer";
import { client } from "@/client";
import { GetStaticProps } from "next";
import { PostType } from "@/types/PostType";

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
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: "Error: Failed to fetch",
      },
    };
  }
};

const Home = ({
  posts,
  error,
}: {
  posts: { fields: PostType }[];
  error: string;
}) => {
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
        <Footer />
      </main>
    </>
  );
};

export default Home;
