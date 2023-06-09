import Head from "next/head";
import BlogContainer from "./components/BlogContainer";
import { getData } from "@/utility/getData";

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      posts: data,
    },
  };
};

const Blogs = ({ posts }: { posts: BlogType[] }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <main>
        <h1>Blogs</h1>
        <BlogContainer posts={posts} />
      </main>
    </>
  );
};

export default Blogs;
