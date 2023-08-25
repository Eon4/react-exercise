import { useState } from "react";
import { Wrapper } from "../wrapper/wrapper";
import style from './exercise7.module.scss'

export function Exercise7() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function alertUser() {
        alert (`Hello ${firstName}  ${lastName}`)
    }

    console.log("firstname: ", firstName)
    console.log("lastname: ", lastName)

    return (
    <Wrapper title ="Exercise 7">
    <form className={StylePropertyMap.formStyle}>
        <div>
            <input onChange={(event) => setFirstName(event.target.value)}  placeholder="skriv dit navn her" />
            <input onChange={(event) => setLastName(event.target.value)}  placeholder="lastnavn her" />
            <button onClick={ alertUser} type="button">Greet me</button>
        </div>
    </form>
   </Wrapper>
  )
}