import Head from "next/head";
import BlogPageContent from "../../components/blogs/BlogPageContent";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/?_limit=10"
    );
    const data = await res.json();
    return {
      props: {
        posts: data,
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

const BlogPage = ({ posts, error }: { posts: BlogType[]; error: string }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <BlogPageContent posts={posts} error={error} />
    </>
  );
};

export default BlogPage;
