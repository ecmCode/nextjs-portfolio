import { ReactNode } from "react";

export type ContainerType = {
  variant: "1/3" | "2/3" | "full";
  children: ReactNode;
};
