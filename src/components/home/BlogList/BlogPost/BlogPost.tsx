import Link from "next/link";
import style from "./BlogPost.module.css";
import { PostType } from "@/types/PostType";
import { Text } from "@contentful/rich-text-types";

const BlogPost = ({ content,title,thumbnail,slug}: PostType) => {
  const excerpt = (content.content[0].content[0] as Text).value;
  const {
    details: {
      image: { width, height },
    },
    url,
    title: alt,
  } = thumbnail.fields.file;
  return (
    <li className={style.box}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.body}>{excerpt}</p>
      <div className="flex justify-end">
        <Link href={"/blogs/" + slug} className={style.link}>
          Read More
        </Link>
      </div>
    </li>
  );
};

export default BlogPost;
