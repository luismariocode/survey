import { ButtonNavProps } from "../types/types";

function ButtonPrev(props: ButtonNavProps) {
  return (<button onClick={props.onClick} disabled={props.disabled} className="button__prev" > Comenzar !</button>);
}

export default ButtonPrev;