import Link from "next/link";
import style from "./PostPageContent.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES, type Text } from "@contentful/rich-text-types";
import Image from "next/image";
import { PostType } from "@/types/PostType";
import usePost from "@/hooks/usePost";
import { format } from "date-fns";
import type { Document } from "@contentful/rich-text-types";
import { CopyBlock, codepen } from "react-code-blocks";

const extractContent = (str: string) => {
  const regex = /\[(.*?)\](.*)/s;
  const matches = str.match(regex);
  if (matches) {
    const [, bracket, string] = matches;
    return { bracket, string };
  } else {
    return null; // Return null if no match is found
  }
};

const RichTextComponent = ({ content }: { content: Document }) => {
  // How each rich text element should be rendered as jsx element
  return (
    <>
      {documentToReactComponents(content, {
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
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <div className="my-10">
              {!!(node.content[0] as Text).marks[0] ? (
                children
              ) : (
                <p>{children}</p>
              )}
            </div>
          ),
          [INLINES.HYPERLINK]: (node, children) => {
            return (
              <Link href={node.data.uri} className="btn btn-secondary">
                {children}
              </Link>
            );
          },
        },
        renderMark: {
          [MARKS.CODE]: (children) => {
            const result = extractContent(children?.toString()!) as unknown as {
              bracket: string;
              string: string;
            };
            return result ? (
              <CopyBlock
                language={result.bracket}
                theme={{ ...codepen, mode: "dark" }}
                showLineNumbers
                wrapLongLines={false}
                startingLineNumber={1}
                codeBlock
                copied
                onCopy={() => console.log("copied")}
                text={result.string}
              />
            ) : (
              <code>{children}</code>
            );
          },
        },
      })}
    </>
  );
};

const PostPageContent = ({ post }: { post: PostType }) => {
  const {
    content,
    email,
    isAdmin,
    name,
    tags,
    title,
    alt,
    url,
    height,
    width,
    createdAt,
    updatedAt,
  } = usePost(post); // unpack all values using usePost hook

  return (
    <main className={style.main}>
      <Image
        width={width}
        height={height}
        src={`https:${url}`}
        alt={(alt as string) || "header img"}
        className={style.thumbnail}
      />
      <h1 className={style.title}>{title}</h1>
      <div
        id="fields"
        className="flex flex-col items-center sm:items-start justify-center gap-1 "
      >
        <div id="author">
          Author: {name}{" "}
          {isAdmin && (
            <span className="italic text-sm text-amber-400">Admin</span>
          )}
        </div>

        <div id="email">{email && <span>Email: {email}</span>}</div>

        <div id="createdAt">
          Created At: {format(Date.parse(createdAt), "MMM dd yyyy hh:mm")}
        </div>

        <div id="updatedAt">
          {createdAt !== updatedAt && (
            <span>
              Updated At: {format(Date.parse(updatedAt), "MMM dd yyyy hh:mm")}
            </span>
          )}
        </div>

        <div id="tags">
          {tags && (
            <div className="gap-2 flex flex-wrap items-center">
              Tags:
              {tags?.map((tag) => (
                <Link
                  key={tag}
                  className="btn btn-primary py-1"
                  href={`/blogs/tags/${tag}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={style.body}>
        <RichTextComponent content={content} />
      </div>
      <div className={style.btns}>
        <Link href="/blogs" className="btn btn-action">
          All Blogs
        </Link>
        <Link href="/" className="btn btn-secondary">
          Home
        </Link>
      </div>
    </main>
  );
};

export default PostPageContent;
