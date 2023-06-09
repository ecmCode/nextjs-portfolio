import Link from "next/link";
import style from "./BlogPost.module.css";

const BlogPost = ({ id, title, body }: BlogType) => {
  return (
    <div className={style.box}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.body}>{body}</p>
      <span className="text-right lg:text-center">
        <Link href={`/blogs/${id}`}>More</Link>
      </span>
    </div>
  );
};

export default BlogPost;
