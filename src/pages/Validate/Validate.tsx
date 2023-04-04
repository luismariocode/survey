
import Modal from "./components/Modal";
import { useState, useRef } from "react";

const Validate = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevenir la recarga de la página
  
    // Ocultar la modal
    const modal = document.querySelector(".modal-check") as HTMLElement;
    modal.classList.remove("modal--hidden");
  
    // Realizar la validación
    // ...
  
    // Enviar el formulario a Google Forms
    const form = event.currentTarget;
    const formData = new FormData(form);
    const url = form.action;
    const options = {
      method: form.method,
      body: formData,
    };
    const response = await fetch(url, options);
  
    // Manejar la respuesta
    if (response.ok) {
      console.log("Formulario enviado con éxito");
      // Mostrar mensaje de éxito o redirigir a otra página
    } else {
      console.error("Error al enviar el formulario");
      // Mostrar mensaje de error o hacer algo para manejar el error
    }
  
    // Restablecer el estado del formulario para permitir su envío posterior
    setFormSubmitted(false);
  };

  const entries: Record<string, unknown> = JSON.parse(
    localStorage.getItem("entries") || "{}"
  );

  const inputs = Object.entries(entries).map(([key, value]) => {
    const name = key as string;
    const val = value as string;
    return <input key={name} type="hidden" name={name} value={val} />;
  });

  const handleModalClose = () => {
    // Redirigir al usuario a la página de confirmación
    window.location.href = window.location.href;
  };

  return (
    <>
      <Modal />
      <section className="thankyou">
        <div className="thankyou__title">
          <h1>
            ¡GRACIAS!<br />
          </h1>
          <span>Ahora solo valida tus respuestas.</span>
        </div>

        <form
          className="validate"
          action="https://docs.google.com/forms/d/e/1FAIpQLSeEK7Ey5QbK8629w-51e-MiuINgFy9eNlkkXHcmg3TqTQrqQQ/formResponse"
          method="post"
          onSubmit={handleSubmit}
          ref={formRef}
          target="_self"
        >
          {inputs}
          <div className="container-btn">
            <button className="button--validar" type="submit">
              Validar tus Respuestas
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Validate;