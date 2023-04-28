type Blog = {
    userId?: number,
    id: number,
    title: string,
    body:string

}

type Posts = {
  posts: Blog[]
}

type Project = {
  name: string;
  desc: string;
  imageURL: string;
  codeURL: string;
  demoURL: string;
}