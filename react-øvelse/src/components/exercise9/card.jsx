export function Card(props){


    return (
        <div>
            <img src={props.src}></img>
            <p> {props.firstName} {props.lastName} </p>
            <p> {props.title} </p>
            <p> {props.keySkill} </p>
        </div>
    )
}