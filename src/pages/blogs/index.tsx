import Head from "next/head";
import BlogPageContent from "./components/BlogPageContent";
import { getData } from "@/utility/getData";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      posts: data,
    },
  };
};

const BlogPage = ({ posts }: { posts: BlogType[] }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <BlogPageContent posts={posts} />
    </>
  );
};

export default BlogPage;
