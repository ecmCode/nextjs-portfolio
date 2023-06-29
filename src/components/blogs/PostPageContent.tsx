import Link from "next/link";
import style from "./PostPageContent.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Image from "next/image";
import { PostType } from "@/types/PostType";

const PostPageContent = ({ post }: { post: PostType }) => {
  const { name, isAdmin, email } = post.author.fields;
  const {
    details: {
      image: { width, height },
    },
    url,
    title: alt,
  } = post.thumbnail.fields.file;

  return (
    <main className={style.main}>
      <Image
        width={width}
        height={height}
        src={`https:${url}`}
        alt={alt}
        className={style.thumbnail}
      />
      <h1 className={style.title}>{post.title}</h1>
      <div>
        <div>
          Author: {name}{" "}
          {isAdmin && (
            <span className="italic text-sm text-amber-400">Admin</span>
          )}
        </div>

        {email && <div>Email: {email}</div>}
        {post.tags && (
          <div>
            Tags:
            {post.tags?.map((tag) => (
              <span key={tag} className="bg-slate-500/30 px-4 mx-2">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={style.body}>
        {documentToReactComponents(post.content, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
              if (node.data.target.fields.file.url) {
                return (
                  <Image
                    src={"https://" + node.data.target.fields.file.url}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                    alt={node.data.target.fields.title}
                    className="w-full object-cover"
                  />
                );
              }
            },
          },
        })}
      </div>
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
