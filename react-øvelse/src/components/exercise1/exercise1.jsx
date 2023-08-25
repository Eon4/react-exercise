import style from "../Exercise1/Exercise1.module.scss";
import { Wrapper } from "../wrapper/wrapper";

export function Exercise1() {
  return (
    <Wrapper title="Exercise 1">
      <div className={style.yellowBox}>
        <p>Hello, World!</p>
      </div>
    </Wrapper>
  );
}