import Link from "next/link";
import Container from "../Container";
import Title from "../Title";
import BlogPost from "./BlogPost/BlogPost";
import style from "./BlogList.module.css";

const BlogList = ({
  posts,
  error,
  isLoading,
}: {
  posts: Blog[] | undefined;
  error: Error | undefined;
  isLoading: boolean;
}) => {
  return (
    <>
      <Title>Blogs</Title>
      <Container variant="1/3">
        {isLoading && !error && <p>Loading...</p>}
        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          !isLoading && (
            <>
              <div className={style.gridbox}>
                {posts &&
                  posts.map((post) => (
                    <BlogPost
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      body={post.body}
                    />
                  ))}
              </div>
              <div className={style.bottom}>
                <Link href="/blogs#top" className={style.link}>
                  All Blogs
                </Link>
              </div>
            </>
          )
        )}
      </Container>
    </>
  );
};
export default BlogList;
