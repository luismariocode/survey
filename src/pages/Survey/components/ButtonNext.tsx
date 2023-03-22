import { ButtonNavProps } from "../types/types";

function ButtonNext(props: ButtonNavProps) {
  return (<button onClick={props.onClick} disabled={props.disabled} className="button__next" > Comenzar !</button>);
}

export default ButtonNext;

