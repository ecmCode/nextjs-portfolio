import Link from "next/link";
import style from "./BlogPost.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { PostType } from "@/types/PostType";
import usePost from "@/hooks/usePost";

const ImgSkeleton = () => {
  return (
    <div className="animate-pulse bg-slate-400/40 aspect-video w-full"></div>
  );
};

const TitleSkeleton = () => {
  return <div className="animate-pulse bg-slate-400/50 w-full h-8"></div>;
};

const AuthorSkeleton = () => {
  return <div className="animate-pulse bg-slate-600/50 w-1/3 h-6"></div>;
};

const ExcerptSkeleton = () => {
  return (
    <div>
      <div className="animate-pulse bg-slate-400/50 w-full h-6 mt-1"></div>
      <div className="animate-pulse bg-slate-400/50 w-full h-6 mt-1"></div>
      <div className="animate-pulse bg-slate-400/50 w-full h-6 mt-1"></div>
      <div className="animate-pulse bg-slate-400/50 w-2/3 h-6 mt-1"></div>
    </div>
  );
};

const LinkSkeleton = () => {
  return <div className="animate-pulse bg-slate-600/50 w-1/3 h-10"></div>;
};

const BlogPost = ({ post }: { post: PostType }) => {
  const { alt, excerpt, height, width, url } = usePost(post);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [url, alt]);

  return (
    <li className={style.box}>
      <div className="rounded ring-1 ring-slate-400/50 dark:ring-slate-200/50">
        {loading ? (
          <ImgSkeleton />
        ) : (
          <Image
            width={width}
            height={height}
            src={`https:${url}`}
            alt={alt as string}
            loading="lazy"
            className="object-cover aspect-video"
          />
        )}
      </div>
      <div className={style.body}>
        <h2 className={style.title}>
          {loading ? <TitleSkeleton /> : post.title}
        </h2>

        {loading ? (
          <AuthorSkeleton />
        ) : (
          <p>
            by: {post.author.fields.name}{" "}
            {post.author.fields.isAdmin && "(Admin)"}
          </p>
        )}

        {loading ? (
          <ExcerptSkeleton />
        ) : (
          <p className={style.excerpt}>{excerpt}</p>
        )}
      </div>

      <div className="flex justify-end">
        {loading ? (
          <LinkSkeleton />
        ) : (
          <Link
            href={"/blogs/" + post.slug}
            className="btn btn-action w-full lg:w-auto"
          >
            Read More
          </Link>
        )}
      </div>
    </li>
  );
};

export default BlogPost;
