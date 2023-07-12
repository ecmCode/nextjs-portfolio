import type { PostType } from "@/types/PostType";
import type { AssetFile } from "contentful";
import type { Text } from "@contentful/rich-text-types";

const usePost = (post: PostType) => {
  const { author, slug, tags, title, content, thumbnail } = post;
  const excerpt = (content.content[0].content[0] as Text).value;
  const { file, title: alt } = thumbnail.fields;
  const { url, details } = file as AssetFile;
  const { height, width } = details.image!;
  return {
    author,
    slug,
    tags,
    title,
    excerpt,
    alt,
    url,
    height,
    width,
  };
};

export default usePost;
