import { useState, useEffect } from "react";
import { Wrapper } from "../wrapper/wrapper";
import style from './exercise9.module.scss'

export function Exercise9() {

    const [userData, setUserData] = useState([])

    useEffect(() => {

        const fetchUsers = () => {
            const url = 'https://random-data-api.com/api/users/random_user?size=10'
            fetch (url).then(result => result.json ()).then(data => setUserData(data))
        }
        fetchUsers()

    },[])

    useEffect(() => {
        console.log("data: ", userData )

    },[userData])

    return (
        <Wrapper title="Exercise 9">
            <section>
                {
                    userData && userData.map((item) => {
                        return (
                            <Card
                            key= {item.uid}
                            src= {item.avatar}
                            firstName={item.first_name}
                            lastName={item.last_name}
                            keySkill={item.employment.key_skill}
                            />
                        )
                    })
                }
            </section>
 
    </Wrapper>
    )
}