import style from './card.module.scss'

export function Card(props){


    return (
        <div>
            <div>
                <div className= {style.cardFront}>
            <img src={props.src}></img>
            <p> {props.firstName} {props.lastName} </p>
            <p>Title: {props.title} </p>
            <p>Skill: {props.keySkill} </p>
            </div>
            <div className ={style.cardBack}>
                <p> Streetname: {props.streetName} </p>
                <p> City: {props.city} </p>
                <p> State: {props.state} </p>
                <p> Country {props.country} </p>
               </div>
           </div>
        </div>
    )
}