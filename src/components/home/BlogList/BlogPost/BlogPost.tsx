import Link from "next/link";
import Image from "next/image";
import style from "./BlogPost.module.css";
import usePost from "@/hooks/usePost";
import Suspense from "@/hooks/Suspense";
import type { PostType } from "@/types/PostType";

const ImgSkeleton = () => {
  return (
    <div className="animate-pulse bg-slate-400/40 w-full aspect-video "></div>
  );
};

const ContentSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className=" bg-slate-600/50 w-full h-6 my-6"></div>
      <div>
        <div className="bg-slate-400/50 w-full h-4 mt-2"></div>
        <div className="bg-slate-400/50 w-full h-4 mt-2"></div>
        <div className="bg-slate-400/50 w-full h-4 mt-2"></div>
      </div>
      <div className="flex justify-end">
        <div className="bg-slate-600/50 w-1/2 h-8 my-4"></div>
      </div>
    </div>
  );
};

const BlogPost = ({ post }: { post: PostType }) => {
  const { alt, excerpt, height, width, url, title, slug } = usePost(post);

  return (
    <li className="card card-blog">
      <div className={style.box}>
        <div className="card">
          <Suspense fallback={<ImgSkeleton />} delay={2000}>
            <Image
              width={width}
              height={height}
              src={`https:${url}`}
              alt={alt as string}
              className={style.thumbnail}
            />
          </Suspense>
        </div>
        <Suspense fallback={<ContentSkeleton />}>
          <>
            <h2 className={style.title}>{title}</h2>
            <p className={style.body}>{excerpt}</p>
            <div className="flex justify-end">
              <Link
                href={"/blogs/" + slug}
                className="btn btn-action w-full sm:w-auto"
              >
                Read More
              </Link>
            </div>
          </>
        </Suspense>
      </div>
    </li>
  );
};

export default BlogPost;
