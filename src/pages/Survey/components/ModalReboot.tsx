import { ButtonRebootModalProps } from "../types/types";

function Modal(props: ButtonRebootModalProps)  {

  return (
    <div className="modal--reboot modal--hidden">
      {/* <div className="modal__container">
        <span className="modal__icon material-symbols-outlined">
          help
        </span>
        <h2 className="modal__text">
          ¿Seguro qué quieres reiniciar el test?
        </h2>
        <div className="modal__buttons">
          <button onClick={props.onClickNo} className="modal__button modal__button--no">No</button>
          <button onClick={props.onClickSi} className="modal__button modal__button--si">Sí, entiendo.</button>
        </div>
      </div> */}
    </div>)
}


export default Modal;
