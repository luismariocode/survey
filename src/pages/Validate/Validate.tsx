
const Validate = () => {

  const entries: Record<string, unknown> = JSON.parse(localStorage.getItem("entries") || "{}");

  const inputs = Object.entries(entries).map(([key, value]) => {
    const name = key as string;
    const val = value as string;
    return (
      <input
        key={name}
        type="hidden"
        name={name}
        value={val}
      />
    );
  });

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); // evita el envío del formulario
  //   const form = event.currentTarget;
  //   // realiza la validación y envío del formulario aquí
  // };


  return (
    <>
      <section className="thankyou">
        <div className="thankyou__title">
          <h1>¡GRACIAS!<br /></h1>
          <span>
            Ahora solo valida tus respuestas.
          </span>
        </div>

        <form
        className="validate"
        action="https://docs.google.com/forms/d/e/1FAIpQLSeEK7Ey5QbK8629w-51e-MiuINgFy9eNlkkXHcmg3TqTQrqQQ/formResponse"
        method="post"
      // onSubmit={handleSubmit}
      >

        {inputs}
        <div className="container-btn">
          <button className="button--validar" type="submit">Validar tus Respuestas</button>
        </div>
        
      </form>
      </section>
     
    </>
  );
};

export default Validate;

// https://docs.google.com/forms/d/e/1FAIpQLSeEK7Ey5QbK8629w-51e-MiuINgFy9eNlkkXHcmg3TqTQrqQQ/viewform?usp=pp_url&entry.1591421491=fdgd&entry.23723034=gdfd&entry.402379595=Si