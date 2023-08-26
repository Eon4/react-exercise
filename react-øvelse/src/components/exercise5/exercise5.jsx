import { Wrapper } from "../wrapper/wrapper";
import style from "../exercise5/exercise5.module.scss";

export function Exercise5() {
  const animalArray = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <Wrapper title="Exercise 5">
      <ul className={style.animals}>
        {animalArray.map((animal, index) => {
          return <li key={index}>{animal}</li>;
        })}
      </ul>
    </Wrapper>
  );
}