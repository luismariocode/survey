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
              <h1>
                Test de<br />
                Inteligencia<br />
                Múltiple<br />
              </h1>
            </div>
            <div className="home__subtitle">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
                molestias quia. Beatae esse, hic ipsum voluptas error tenetur!
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
