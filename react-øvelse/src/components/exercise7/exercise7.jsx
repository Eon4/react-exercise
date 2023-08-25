// import { useState } from "react;"
import { Wrapper } from "../wrapper/wrapper";
import style from './exercise7.module.scss'

export function Exercise7() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");

    return (

    

   <Wrapper title ="Exercise 7">
    <form className={StylePropertyMap.formStyle}>
        <div>
            <input name="firstname" placeholder="skriv dit navn her" />
        </div>

    </form>

   </Wrapper>


  )
}