import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { PostType } from "@/types/PostType";
import { BlogPostSkeleton } from "@/types/BlogPostSkeleton";
import { client } from "@/client";
import BlogPageContent from "@/components/blogs/BlogPageContent";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
  });

  const tags = res.items
    .map((item) => item.fields.tags)
    .filter((tag) => !!tag) // remove falsey values
    .join()
    .split(",") // split each tag by comma
    // finally, remove duplicates
    .filter((tag, index, array) => array.indexOf(tag) === index);

  const paths = tags.map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.tags[match]": context.params?.tag as string,
    });

    return {
      props: {
        title: context.params?.tag,
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

const TagPage = ({
  posts,
  title,
  error,
}: {
  posts: PostType[];
  error: string;
  title: string;
}) => {
  if (!posts)
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
        <title>Tag: {title}</title>
      </Head>
      <BlogPageContent title={title} posts={posts} error={error} />
    </>
  );
};

export default TagPage;
