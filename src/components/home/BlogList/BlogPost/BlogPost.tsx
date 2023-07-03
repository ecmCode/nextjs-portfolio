import Link from "next/link";
import style from "./BlogPost.module.css";
import { PostType } from "@/types/PostType";
import { Text } from "@contentful/rich-text-types";
import Image from "next/image";
import { useState, useEffect } from "react";

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

const BlogPost = ({ content, title, thumbnail, slug }: PostType) => {
  const excerpt = (content.content[0].content[0] as Text).value;
  const {
    file: {
      details: {
        image: { width, height },
      },
      url,
    },
    title: alt,
  } = thumbnail.fields;
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [url, alt]);
  
  return (
    <li className={style.box}>
      {
        loading
        ? <ImgSkeleton/> 
        : <Image
            width={width}
            height={height}
            src={`https:${url}`}
            alt={alt}
            className={style.thumbnail}
          />
      }
      
      {
        loading
        ? <ContentSkeleton/>
        : <>
            <h2 className={style.title}>{title}</h2>
            <p className={style.body}>{excerpt}</p>
            <div className="flex justify-end">
              <Link href={"/blogs/" + slug} className={style.link}>
                Read More
              </Link>
            </div>
          </>
      }
      
    </li>
  );
};

export default BlogPost;
