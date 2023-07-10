import { Document } from "@contentful/rich-text-types";
import type { Asset } from "contentful/dist/types/types";

export type PostType = {
  title: string;
  slug: string;
  tags: string[];
  content: Document;
  author: Author;
  thumbnail: Asset;
};

type Author = {
  fields: {
    name: string;
    isAdmin: boolean;
    email: string;
  };
};
