import { PostType } from "@/types/PostType";
import BlogPost from "./BlogPost";

const BlogPageContent = ({
  posts,
  error,
}: {
  posts: { fields: PostType }[];
  error: string;
}) => {
  return (
    <main>
      <h1>Blogs</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 w-full sm:w-2/3 gap-10 my-10">
        {error ? (
          <p>{error}</p>
        ) : (
          posts?.map((post, index) => (
            <BlogPost key={index} post={post.fields} />
          ))
        )}
      </ul>
    </main>
  );
};

export default BlogPageContent;
