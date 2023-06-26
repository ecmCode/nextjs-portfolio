import { stacks } from "./stack";
import Container from "../Container/Container";
import Subtitle from "../Titles/Subtitle";
import style from "./StackList.module.css";

const StackList = () => {
  return (
    <>
      <Subtitle>Stacks</Subtitle>
      <Container variant="1/3">
        <ul className={style.list}>
          {stacks.map((stack) => {
            return (
              <li className={style.item} key={stack.name}>
                <span className={style.border}></span>
                <div className={style.container}>
                  <span className={style.icon}>{stack.icon}</span>
                  <p>{stack.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default StackList;
