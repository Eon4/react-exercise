import style from "../exercise6/exercise6.module.scss"

export function CreateList(props) {
    return (
      <table>
          <tbody className={style.tBody}>
        {props.list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      
    );
  }