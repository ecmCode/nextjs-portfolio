import Link from "next/link";
import Container from "../Container/Container";
import Title from "../Titles/Title";
import BlogPost from "./BlogPost/BlogPost";
import style from "./BlogList.module.css";
import { PostType } from "@/types/PostType";
import { useState } from "react";

const BlogList = ({
  posts,
  error,
}: {
  posts: { fields: PostType }[];
  error: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Title>Posts by Admin</Title>
      <Container variant="2/3">
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
                    <BlogPost
                      key={post.fields.slug}
                      {...post.fields}
                      loading={loading}
                      setLoading={setLoading}
                    />
                  ))}
            </div>
            <div className={style.bottom}>
              {!loading &&
                <Link href="/blogs" className={style.link}>
                  All Blogs
                </Link>
              }
            </div>
          </>
        )}
      </Container>
    </>
  );
};
export default BlogList;
