type Blog = {
  userId?: number;
  id: number;
  title: string;
  body: string;
};

type Project = {
  name: string;
  desc: string;
  imageURL: string;
  codeURL: string;
  demoURL: string;
};

type variant = "1/3" | "2/3" | "full";
