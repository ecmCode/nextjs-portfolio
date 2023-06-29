import Head from "next/head";
import BlogPageContent from "../../components/blogs/BlogPageContent";
import type { GetStaticProps } from "next";
import { createClient, type ContentfulClientApi } from "contentful";
import { useEffect } from "react";
import type { PostType } from "@/types/PostType";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client: ContentfulClientApi<undefined> = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });

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

const BlogPage = ({
  posts,
  error,
}: {
  posts: { fields: PostType }[];
  error: string;
}) => {
  
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
