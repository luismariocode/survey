

const Modal = () => { 
  

  return (
    <div className="modal-check modal--reboot modal--hidden">
      <span className="material-symbols-outlined modal-check--icon ">check</span>
      <h2 className="modal-check--title">¡Test completado!<br />
        Gracias por tus respuestas.
      </h2>
      <a href="home"><span className="material-symbols-outlined modal-check--home" >home</span>
      <span className="modal-check--link">Ir al inicio</span></a>
    </div>)

}


export default Modal;
