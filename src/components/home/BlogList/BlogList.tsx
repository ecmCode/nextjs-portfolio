import Link from "next/link";
import Container from "../Container/Container";
import Title from "../Titles/Title";
import BlogPost from "./BlogPost/BlogPost";
import style from "./BlogList.module.css";
import { PostType } from "@/types/PostType";

const BlogList = ({
  posts,
  error,
}: {
  posts: { fields: PostType }[];
  error: string;
}) => {
  return (
    <>
      <Title>Posts by Admin</Title>
      <Container variant="2/3">
        {!posts && <p>Loading...</p>}
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <div className={style.gridbox}>
              {posts &&
                posts
                  .filter((post) => post.fields.author.fields.isAdmin)
                  .slice(0, 4)
                  .map((post) => (
                    <BlogPost key={post.fields.slug} {...post.fields} />
                  ))}
            </div>
            <div className={style.bottom}>
              <Link href="/blogs" className={style.link}>
                All Blogs
              </Link>
            </div>
          </>
        )}
      </Container>
    </>
  );
};
export default BlogList;
