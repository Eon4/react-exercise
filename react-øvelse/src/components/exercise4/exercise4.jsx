import { useState } from "react";
import { Wrapper } from "../wrapper/wrapper";
import style from "../exercise4/exercise4.module.scss";

export function Exercise4() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper title="Exercise 4">
      <p>You've clicked: {count} times</p>
      <button className = {style.buttonMe} onClick={() => setCount(count + 1)}>Click me</button>
    </Wrapper>
  );
}