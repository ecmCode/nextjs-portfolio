import ProjectList from "./ProjectList";
import StackList from "./StackList";
import Title from "../Titles/Title";
import Container from "../Container/Container";

const Techs = () => {
  return (
    <>
      <Title>Techs</Title>
      <Container variant="full">
        <StackList />
        <ProjectList />
      </Container>
    </>
  );
};

export default Techs;
