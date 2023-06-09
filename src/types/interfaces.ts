import { ReactNode } from "react";

export interface IPosts {
  posts?: Blog[];
}

export interface IContainer {
  variant: variant;
  children: ReactNode;
}
