import { Wrapper } from "../wrapper/wrapper";
import { jsonJokes } from "./jokes";
import style from './exercise8.module.scss'

export function Exercise8() {

    return(
            
    <Wrapper title="Exercise 8">
        <div className={style.jokeContainer}>
            {
                jsonJokes.map((item, index) => {
                    return(
                        <div key={item.id}>
                            <h5>{item.setup}</h5>
                            <p>{item.punchline}</p>
                        </div>
                    )
                })
            }
        </div>
    </Wrapper>
    )
}