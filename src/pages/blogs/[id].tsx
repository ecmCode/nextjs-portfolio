import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import PostPageContent from "@/components/blogs/PostPageContent";

export const getStaticPaths: GetStaticPaths = async () => {
  const data: BlogType[] = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?_limit=10`
  ).then((res) => res.json());

  const paths = data.map((blog) => {
    return {
      params: {
        id: blog.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const data: BlogType[] = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/`
  ).then((res) => res.json());

  return {
    props: {
      post: data,
    },
  };
};

const PostPage = ({ post }: { post: BlogType }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostPageContent {...post} />
    </>
  );
};

export default PostPage;
