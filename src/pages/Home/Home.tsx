import User from "./components/User";
import dataSurvey from "../../server/server";

const Home = () => {

  dataSurvey();

  return (
    <>
      <section className="home">
        <div className="home__main">
          <h1 className="home__title">
            Test de<br />
            Inteligencia<br />
            Múltiple<br />
          </h1>
          <span className="home__subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            molestias quia. Beatae esse, hic ipsum voluptas error tenetur!
          </span>
        </div>
        <User />
      </section>
    </>
  );
};

export default Home;