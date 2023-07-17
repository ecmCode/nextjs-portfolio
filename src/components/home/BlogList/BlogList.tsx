import Link from "next/link";
import Container from "../Container/Container";
import Title from "../Titles/Title";
import style from "./BlogList.module.css";
import { PostType } from "@/types/PostType";
import BlogPost from "./BlogPost/BlogPost";

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
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <ul className={style.gridbox}>
              {posts
                .filter((post) => post.fields.author.fields.isAdmin)
                .slice(0, 4)
                .map((post) => (
                  <BlogPost key={post.fields.slug} post={post.fields} />
                ))}
            </ul>
            <div className={style.bottom}>
              <Link href="/blogs" className=" btn btn-primary">
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
