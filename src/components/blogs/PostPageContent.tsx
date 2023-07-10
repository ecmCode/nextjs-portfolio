import Link from "next/link";
import style from "./PostPageContent.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

import Image from "next/image";
import { PostType } from "@/types/PostType";
import { AssetFile } from "contentful/dist/types/types";

const PostPageContent = ({ post }: { post: PostType }) => {
  const { name, isAdmin, email } = post.author.fields;
  const { file, title: alt } = post.thumbnail.fields;
  const { url, details } = file as AssetFile;
  const { height, width } = details.image!;

  return (
    <main className={style.main}>
      <Image
        width={width}
        height={height}
        src={`https:${url}`}
        alt={(alt as string) || "header img"}
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
              const {
                title: alt,
                file: {
                  url,
                  details: {
                    image: { height, width },
                  },
                },
              } = node.data.target.fields;
              if (url && width > 0) {
                return (
                  <div className="w-full flex items-center justify-center my-10">
                    <Image
                      src={`https:${url}`}
                      height={height}
                      width={width}
                      alt={alt || "image"}
                      className="object-cover"
                    />
                  </div>
                );
              }
            },
            [BLOCKS.PARAGRAPH]: (_, children) => (
              <p className="my-10">{children}</p>
            ),
          },
          renderMark: {
            [MARKS.CODE]: (children) => (
              <code className="bg-slate-900/60 rounded p-2">{children}</code>
            ),
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
