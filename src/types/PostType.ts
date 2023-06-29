import { Document } from "@contentful/rich-text-types";

export type PostType = {
  title: string;
  slug: string;
  tags: string[];
  content: Document;
  author: {
    fields: {
      name: string;
      isAdmin: boolean;
      email: string;
    };
  };
  thumbnail: {
    fields: {
      file: {
        details: {
          image: {
            width: number;
            height: number;
          };
        };
        url: string;
      };
      title: string;
    };
  };
};
