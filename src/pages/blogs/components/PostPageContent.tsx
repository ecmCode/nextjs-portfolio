import Link from "next/link";
import style from "./PostPageContent.module.css";

const PostPageContent = ({ title, body }: BlogType) => {
  return (
    <main className={style.main}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.body}>{body}</p>
      <div className={style.btns}>
        <Link href="/blogs" className="text-cyan-500">
          All Blogs
        </Link>
        <Link href="/" className={style.homebtn}>
          Home
        </Link>
      </div>
    </main>
  );
};

export default PostPageContent;
