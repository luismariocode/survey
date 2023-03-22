import { ButtonConfirmProps } from "../types/types";

function ButtonPrev(props: ButtonConfirmProps) {
  return (<button onClick={props.onClick}  className="button__confirm" > Validar </button>);
}

export default ButtonPrev;