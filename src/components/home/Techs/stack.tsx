import { SiTailwindcss, SiTypescript, SiReact } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

interface Stack {
  name: string;
  icon: JSX.Element;
}

export const stacks: Stack[] = [
  { name: "html", icon: <FaHtml5 /> },
  { name: "css", icon: <FaCss3 /> },
  { name: "tailwind", icon: <SiTailwindcss /> },
  { name: "javascript", icon: <FaJs /> },
  { name: "typescript", icon: <SiTypescript /> },
  { name: "react", icon: <SiReact /> },
  { name: "next", icon: <TbBrandNextjs /> },
];
