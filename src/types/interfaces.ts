import { ReactNode } from "react";

export interface Posts {
    posts: Blog[]
}

export interface TContainer {
    variant: variant,
    children: ReactNode,
}