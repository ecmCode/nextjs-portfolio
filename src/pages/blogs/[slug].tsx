import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import PostPageContent from "@/components/blogs/PostPageContent";
import { PostType } from "@/types/PostType";
import { BlogPostSkeleton } from "@/types/BlogPostSkeleton";
import { client } from "@/client";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": context.params?.slug as string,
  });

  return {
    props: {
      post: res.items[0],
    },
  };
};

const PostPage = ({ post,darkmode}: { post: PostType, darkmode: boolean }) => {
  if (!post)
    return (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <Head>
        <title>{post.fields.title}</title>
      </Head>
      <PostPageContent post={post} darkmode={darkmode}/>
    </>
  );
};

export default PostPage;
