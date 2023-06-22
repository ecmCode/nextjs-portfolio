import ProjectList from "./ProjectList";
import StackList from "./StackList";
import Subtitle from "../Subtitle";
import Title from "../Title";
import React from "react";

const Techs = () => {
  return (
    <>
      <Title>Techs</Title>
      <Subtitle>Stacks</Subtitle>
      <StackList />
      <Subtitle>Projects</Subtitle>
      <ProjectList />
    </>
  );
};

export default Techs;
