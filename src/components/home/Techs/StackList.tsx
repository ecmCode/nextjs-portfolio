import { SiTypescript, SiReact } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import type { PropsWithChildren } from "react";
import Container from "../Container";
import Subtitle from "../Subtitle";

const stacks = [
  { name: "html", icon: <FaHtml5 /> },
  { name: "css", icon: <FaCss3 /> },
  { name: "javascript", icon: <FaJs /> },
  { name: "typescript", icon: <SiTypescript /> },
  { name: "react", icon: <SiReact /> },
];

const Stack = ({ children }: PropsWithChildren) => {
  return (
    <li className="uppercase bg-slate-500/20 py-2 w-full px-6 flex content-start items-center hover:brightness-125">
      {children}
    </li>
  );
};

const StackList = () => {
  return (
    <>
      <Subtitle>Stacks</Subtitle>
      <Container variant="1/3">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-4">
          {stacks.map((stack) => {
            return (
              <Stack key={stack.name}>
                <span className="mr-4 text-2xl">{stack.icon}</span> {stack.name}
              </Stack>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default StackList;
