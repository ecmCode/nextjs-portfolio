import Link from "next/link";
import style from "./BlogPost.module.css";
import type { PostType } from "@/types/PostType";
import { Text } from "@contentful/rich-text-types";
import Image from "next/image";

const BlogPost = ({ post }: { post: PostType }) => {
  const excerpt = (post.content.content[0].content[0] as Text).value;
  const {
    file: {
      details: {
        image: { width, height },
      },
      url,
    },
    title: alt,
  } = post.thumbnail.fields;
  return (
    <li className={style.box}>
      <Image
        width={width}
        height={height}
        src={`https:${url}`}
        alt={alt}
        className={style.thumbnail}
      />
      <div className={style.body}>
        <h2 className={style.title}>{post.title}</h2>
        <p>
          by: {post.author.fields.name}{" "}
          {post.author.fields.isAdmin && "(Admin)"}
        </p>
        <p className={style.excerpt}>{excerpt}</p>
      </div>

      <div className="flex justify-end">
        <Link href={"/blogs/" + post.slug} className={style.link}>
          Read More
        </Link>
      </div>
    </li>
  );
};

export default BlogPost;
