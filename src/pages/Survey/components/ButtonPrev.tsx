import { ButtonRebootProps } from "../types/types";

function ButtonPrev(props: ButtonRebootProps) {
  return (
  <button onClick={props.onClick} className="button__small button__prev" >
    <span className="material-symbols-outlined">skip_previous</span>
  </button>
  );
}

export default ButtonPrev;