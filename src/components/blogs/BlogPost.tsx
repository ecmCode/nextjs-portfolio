import Link from "next/link";
import style from "./BlogPost.module.css";

const BlogPost = ({ title, body, id }: BlogType) => {
  return (
    <li className={style.box}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.body}>{body}</p>
      <div className="flex justify-end">
        <Link href={"/blogs/" + id} className={style.link}>
          Read More
        </Link>
      </div>
    </li>
  );
};

export default BlogPost;
