import { client } from "@/client";
import { BlogPostSkeleton } from "@/types/BlogPostSkeleton";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: {
      tags,
    },
  };
};

const AllTagsPage = ({ tags }: { tags: string[] }) => {
  return (
    <>
      <Head>
        <title>Tags</title>
      </Head>
      <main>
        <h1>All {tags.length} Tags:</h1>
        <ul className="flex items-center justify-center gap-2 w-2/3 md:w-1/3 flex-wrap ">
          {tags.map((tag) => (
            <li key={tag} className="btn btn-secondary">
              <Link href={`/blogs/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default AllTagsPage;
