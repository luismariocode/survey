import React, { useEffect, useState } from "react";



const Modal = () => {

  const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setDescriptionVisible(true);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };


  }, []);


  return (

    <div className="modal-check modal--reboot modal--hidden">
      {descriptionVisible ? (
        <>
          <span className="material-symbols-outlined modal-check--icon ">check</span>
          <h2 className="modal-check--title">¡Test completado!<br />
            Gracias por tus respuestas.
          </h2>
          <a href="home"><span className="material-symbols-outlined modal-check--home" >home</span>
            <span className="modal-check--link">Ir al inicio</span></a>
        </>
      ) : (
        <div style={{"width":"100%", "height":"100%"}}>
        <h2 style={{"margin":"50px auto", "height":"100%"}}>Validando respuestas...</h2>
        <div className="container-loading">
          <div style={{"bottom":"50%"}} className="loading">
          </div>
        </div>
      </div>)}



    </div>)

}


export default Modal;
