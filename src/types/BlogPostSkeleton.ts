import {  EntryFieldTypes } from "contentful";
import { PostType } from "./PostType";

export type BlogPostSkeleton = {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    tags: EntryFieldTypes.Text[];
    content: EntryFieldTypes.RichText;
    author: {
        fields: {
            name: EntryFieldTypes.Text;
            isAdmin: EntryFieldTypes.Boolean;
            email: EntryFieldTypes.Text;
        };
    };
    thumbnail: {
        fields: {
            file: {
                details: {
                    image: {
                        width: EntryFieldTypes.Number;
                        height: EntryFieldTypes.Number;
                    };
                };
                url: EntryFieldTypes.Text;
                title: EntryFieldTypes.Text;
            };
        };
    };
  };
};
