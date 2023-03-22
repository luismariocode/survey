import { ButtonNavProps } from "../types/types";

function ButtonReboot(props: ButtonNavProps) {
  return (<button onClick={props.onClick} disabled={props.disabled} className="button__next" > Comenzar !</button>);
}

export default ButtonReboot;