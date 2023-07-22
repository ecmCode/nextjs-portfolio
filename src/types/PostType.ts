import type { Document } from "@contentful/rich-text-types";
import type { Asset } from "contentful/dist/types/types";

export type PostType = {
  fields: {
    title: string;
    slug: string;
    tags: string[];
    content: Document;
    author: Author;
    thumbnail: Asset;
  };
  sys: {
    createdAt: string;
    updatedAt: string;
  };
};

type Author = {
  fields: {
    name: string;
    isAdmin: boolean;
    email: string;
  };
};
