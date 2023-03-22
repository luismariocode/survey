import { ButtonProps } from "../types/types";


function ButtonStart (props:ButtonProps )  {
  return (<button onClick={props.onClick} disabled={props.disabled} className="button__start" >Comenzar</button>);
}

export default ButtonStart;
