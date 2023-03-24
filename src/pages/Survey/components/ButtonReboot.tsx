import { ButtonRebootProps } from "../types/types";

function ButtonReboot(props: ButtonRebootProps) {
  return (<button onClick={props.onClick}  className="button__next" > 
   <span className="material-symbols-outlined">
restart_alt
</span>
  </button>);
}

export default ButtonReboot;