import style from './card.module.scss'

export function Card(props){


    return (
        <div className= {style.cardStyle}>
            <img src={props.src}></img>
            <p> {props.firstName} {props.lastName} </p>
            <p>Title: {props.title} </p>
            <p>Skill: {props.keySkill} </p>
        </div>
    )
}