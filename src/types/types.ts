type Blog = {
    userId: number,
    id: number,
    title: string,
    body:string
}

type Post = {
  post: Blog
}

type Posts = {
  posts: Blog[]
}

