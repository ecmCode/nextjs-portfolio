import BlogPost from "./BlogPost";

const BlogPageContent = ({
  posts,
  error,
}: {
  posts: BlogType[];
  error: string;
}) => {
  const style = "grid grid-cols-1 lg:grid-cols-2 w-full sm:w-2/3 gap-10 my-10";
  return (
    <main>
      <h1>Blogs</h1>
      <ul className={style}>
        {error ? (
          <p>{error}</p>
        ) : (
          posts?.map((blog) => <BlogPost key={blog.id} {...blog} />)
        )}
      </ul>
    </main>
  );
};

export default BlogPageContent;
