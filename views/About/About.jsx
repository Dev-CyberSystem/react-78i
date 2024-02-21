import "./About.css";
import fotoMartin from "../../src/imagenes/martingarrix-2020.jpg";

const About = () => {
  return (
    <>
      <div className="contenedor-about">
        <section className="section-about">
          <h3 className="h3-about">Acerca de Martin Garrix:</h3>
          <p className="texto-about">
            Nacimiento: 14 de mayo de 1996 (edad 27 años), Amstelveen, Países
            Bajos
          </p>
          <p className="texto-about">Género: Dance/Electrónica</p>
          <p className="texto-about">
            Sellos discográficos: STMPD RCRDS, Spinnin' Records
          </p>
          <p className="texto-about">Educación: Herman Brood Academie (2014)</p>
          <p className="texto-about">
            Premios: MTV Europe Music Award al Mejor Artista Electrónico
          </p>
        </section>
        <div className="contenedor-fotoabout">
          <img
            src={fotoMartin}
            alt="Rostro de Martin Garrix"
            className="rostroMartin"
          />
        </div>
      </div>
    </>
  );
};

export default About;
