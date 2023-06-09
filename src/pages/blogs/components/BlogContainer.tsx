import BlogPost from "./BlogPost";

const BlogContainer = ({ posts }: { posts: BlogType[] }) => {
  const style = "grid grid-cols-1 lg:grid-cols-2 w-full sm:w-2/3 gap-10 my-10";
  return (
    <ul className={style}>
      {posts?.map((blog) => (
        <BlogPost key={blog.id} {...blog} />
      ))}
    </ul>
  );
};

export default BlogContainer;
