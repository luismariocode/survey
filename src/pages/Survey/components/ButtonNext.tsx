import { ButtonNavProps } from "../types/types";

function ButtonNext(props: ButtonNavProps) {
  return (<button onClick={props.onClick} disabled={props.disabled} className="button--next" > 
  Siguiente <span className="material-symbols-sharp">
chevron_right
</span> 
  </button>);
}

export default ButtonNext;

