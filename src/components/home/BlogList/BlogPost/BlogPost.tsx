import Link from "next/link";
import style from "./BlogPost.module.css";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import type { Text } from "@contentful/rich-text-types";
import type { AssetFile } from "contentful";
import type { PostType } from "@/types/PostType";
const ImgSkeleton = () => {
  return (
    <div className="animate-pulse bg-slate-400/40 aspect-video w-full"></div>
  );
};

const ContentSkeleton = () => {
  return (
    <>
      <div className="animate-pulse bg-slate-600/50 w-full h-6 my-2"></div>
      <div>
        <div className="animate-pulse bg-slate-400/50 w-full h-4 mt-2"></div>
        <div className="animate-pulse bg-slate-400/50 w-full h-4 mt-2"></div>
        <div className="animate-pulse bg-slate-400/50 w-full h-4 mt-2"></div>
      </div>
      <div className="flex justify-end">
        <div className="animate-pulse bg-slate-600/50 w-1/2 h-8"></div>
      </div>
    </>
  );
};

interface Props {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const BlogPost = ({
  content,
  title,
  thumbnail,
  slug,
  loading,
  setLoading,
}: PostType & Props) => {
  const excerpt = (content.content[0].content[0] as Text).value;

  const { file, title: alt } = thumbnail.fields;
  const { url, details } = file as AssetFile;
  const { height, width } = details.image!;

  useEffect(() => {
    setLoading(false);
  }, [url, alt, setLoading]);

  return (
    <li className={style.box}>
      {loading ? (
        <ImgSkeleton />
      ) : (
        <Image
          width={width}
          height={height}
          src={`https:${url}`}
          alt={alt as string}
          className={style.thumbnail}
        />
      )}

      {loading ? (
        <ContentSkeleton />
      ) : (
        <>
          <h2 className={style.title}>{title}</h2>
          <p className={style.body}>{excerpt}</p>
          <div className="flex justify-end">
            <Link href={"/blogs/" + slug} className={style.link}>
              Read More
            </Link>
          </div>
        </>
      )}
    </li>
  );
};

export default BlogPost;
