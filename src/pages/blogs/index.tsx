import Head from "next/head";
import BlogPageContent from "../../components/blogs/BlogPageContent";
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

const BlogPage = ({ posts, error }: { posts: PostType[]; error: string }) => {
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
