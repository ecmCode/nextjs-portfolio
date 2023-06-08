import Link from "next/link";
import Container from "../Container";
import HomeTitle from "../HomeTitle";
import { IPosts } from "@/types/interfaces";

const Blogs = ({ id, title, body }: Blog) => {
  return (
    <div className="flex flex-col justify-between gap-6 p-2">
      <h3 className="truncate text-center">{title}</h3>
      <p className="line-clamp-4 break-words">{body}</p>
      <span className="text-right">
        <Link href={`/blogs/${id}`}>More</Link>
      </span>
    </div>
  );
};

const BlogList = ({ posts }: IPosts) => {
  return (
    <>
      <HomeTitle>Blogs</HomeTitle>
      <Container variant="1/3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts &&
            posts.map((post) => (
              <Blogs
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))}
        </div>
        <div className="text-right mt-10">
          <Link href="/blogs#top" className="bg-cyan-400/20 px-12">
            All Blogs
          </Link>
        </div>
      </Container>
    </>
  );
};
export default BlogList;
