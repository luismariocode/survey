import User from "./components/User";
import { useState, useEffect } from "react";

import dataSurvey from "../../server/server";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      dataSurvey();
    };
    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    

    window.addEventListener("load", () => {
      setLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => {
        setLoading(false);
         setTimeout(() => {
      setLoading(false);
    }, 2000);
      });
    };

   
  

  }, []);


  return (
    <>
      {loading ? (
        <div className="container-loading">
          <div className="loading">
          </div>
        </div>
      ) : (
        <section id="home" className="home">
          <div className="home__info">
            <div className="home__title">
              <h1>Test de Inteligencia Múltiple</h1>
            </div>
            <div className="home__subtitle">
              <p> <strong>BIENVENID@</strong>
              <br/>Lee cada declaración detenidamente, si se aplica a tí, selecciona SÍ. En caso de que no estés de acuerdo o no aplica para tí, responde NO. Recuerda, la prueba sólo será precisa si eres honest@ contigo mism@, así que contesta basándote en lo que realmente piensas y sientes, no en cómo creas que deberías o quieres sentirte.
              </p>
            </div>
          </div>
          <div className="home__data">
            <User />
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
