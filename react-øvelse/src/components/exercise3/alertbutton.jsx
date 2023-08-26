import style from "../exercise3/exercise3.module.scss";

export function AlertButton(props){

    return (
        <button className={style.buttonStyle} onClick={() => alert('You clicked on ' + props.title)}>{props.title}</button>
    )
}