import { getData } from "@/utility/getData";
import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
  const data: BlogType[] = await getData();

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

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;

  const data: BlogType[] = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/`
  ).then((res) => res.json());

  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }: { post: BlogType }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className="mt-10 mx-0 lg:mx-40">
        <h1 className="text-left mx-10">{post.title}</h1>
        <p className="p-10">{post.body}</p>
        <div className="flex gap-4 justify-end">
          <Link href="/blogs">
            <p className="text-cyan-500 hover:brightness-125">
              Go back to the blogs
            </p>
          </Link>
          <Link href="/">
            <p className="underline hover:brightness-125">Home</p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Post;
