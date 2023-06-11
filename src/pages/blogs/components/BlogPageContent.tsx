import BlogPost from "./BlogPost";

const BlogPageContent = ({ posts }: { posts: BlogType[] }) => {
  const style = "grid grid-cols-1 lg:grid-cols-2 w-full sm:w-2/3 gap-10 my-10";
  return (
    <main>
      <h1>Blogs</h1>
      <ul className={style}>
        {posts?.map((blog) => (
          <BlogPost key={blog.id} {...blog} />
        ))}
      </ul>
    </main>
  );
};

export default BlogPageContent;
