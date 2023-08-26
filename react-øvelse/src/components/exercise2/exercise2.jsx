import { Wrapper } from "../wrapper/wrapper";
import style from "../exercise2/exercise2.module.scss";


export function Exercise2(){

    return (
        <Wrapper title="Exercise 2">
            <button className={style.buttonMe} onClick={() => alert('You Clicked!')}>Click me</button>
        </Wrapper>
    )    
}