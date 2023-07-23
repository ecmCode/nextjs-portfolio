import { PostType } from "@/types/PostType";
import BlogPost from "./BlogPost";
import Link from "next/link";

const BlogPageContent = ({
  posts,
  error,
  title,
}: {
  posts: PostType[];
  error: string;
  title?: string;
}) => {
  return (
    <main>
      <h1>{title || "All Blogs"}</h1>
      <div id="options" className="flex gap-10 justify-center items-center ">
        {title && (
          <Link href="/blogs" className="btn btn-action">
            All Blogs
          </Link>
        )}

        <Link href="/blogs/tags" className="btn btn-secondary">
          Tags
        </Link>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 w-full sm:w-2/3 gap-10 my-10">
        {error ? (
          <p>Error: {error}</p>
        ) : (
          posts?.map((post, index) => <BlogPost key={index} post={post} />)
        )}
      </ul>
    </main>
  );
};

export default BlogPageContent;
