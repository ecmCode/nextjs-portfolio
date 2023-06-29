import { createClient } from "contentful";
import { ContentfulClientApi } from "contentful/dist/types/types/client";

export const client: ContentfulClientApi<undefined> = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
