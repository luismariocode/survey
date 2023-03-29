import User from "./components/User";
import dataSurvey from "../../server/server";

const Home = () => {

  dataSurvey();

  return (
    <>
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
    </>
  );
};

export default Home;