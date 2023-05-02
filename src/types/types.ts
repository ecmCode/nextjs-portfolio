import { ReactNode } from "react"

type Blog = {
    userId?: number,
    id: number,
    title: string,
    body:string

}

export interface Posts {
  posts: Blog[]
}

type Project = {
  name: string;
  desc: string;
  imageURL: string;
  codeURL: string;
  demoURL: string;
}

type variant = "1/3" | "2/3" | "full"

export interface TContainer {
  variant: variant,
  children: ReactNode,
}