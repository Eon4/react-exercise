import { Wrapper } from "../wrapper/wrapper";
import { CreateList } from "./createList";

export function Exercise6() {
  const animalArray = [
    "🐕 dog",
    "🐈 cat",
    "🐤 chicken",
    "🐄 cow",
    "🐑 sheep",
    "🐎 horse",
  ];
  return (
    <Wrapper title="Exercise 6">
      <CreateList list={animalArray} />
    </Wrapper>
  );
}