import User from "./User";
import dataSurvey from "../../server/server";

const Home = () => {

  dataSurvey();

  return (
  <>
    
    <section className="home">
      <h1 className="home__titulo">
        Test de<br />
        Inteligencia<br />
        Múltiple<br />
      </h1>
      <span className="home__descripcion">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
        molestias quia. Beatae esse, hic ipsum voluptas error tenetur!
      </span>
      <User /> 
    </section>
    <script type="text/typescript">
    </script>
    </>
  );
};

export default Home;