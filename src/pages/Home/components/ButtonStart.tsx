import { ButtonProps } from "../types/types";


function ButtonStart (props:ButtonProps )  {
  return (
  <button onClick={props.onClick} disabled={props.disabled} className="button button__start" >
    <span>Empezar</span>
    <span className="material-symbols-sharp">arrow_forward</span>
  </button>
  );
}

export default ButtonStart;
