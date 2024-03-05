import Carrousel from "../../components/carruseles/Carrousel";

const Caracteristicas = () => {
  return (
    <div className="container mt-5">
      <Carrousel/>
      <h2>Características Principales</h2>
      <p>A continuación, se destacan algunas de las características clave de nuestro sitio:</p>

      <ul>
        <li>
          <strong>Interfaz Intuitiva:</strong> Navega por nuestro sitio de manera sencilla y eficiente.
        </li>
        <li>
          <strong>Contenido Variado:</strong> Encuentra una amplia gama de contenido, desde información educativa hasta entretenimiento.
        </li>
        <li>
          <strong>Personalización:</strong> Ajusta la experiencia según tus preferencias y necesidades.
        </li>
        <li>
          <strong>Responsive:</strong> Disfruta de la misma experiencia sin importar el dispositivo que estés utilizando.
        </li>
      </ul>

      <h2>Funcionalidades Adicionales</h2>
      <p>Además de las características principales, ofrecemos funcionalidades adicionales para mejorar tu experiencia:</p>

      <ul>
        <li>
          <strong>Registro de Usuarios:</strong> Crea una cuenta para acceder a contenido exclusivo y personalizado.
        </li>
        <li>
          <strong>Comentarios y Retroalimentación:</strong> Participa en la comunidad compartiendo tus pensamientos y comentarios.
        </li>
        <li>
          <strong>Exploración de Contenido:</strong> Descubre nuevas secciones y temas de interés fácilmente.
        </li>
      </ul>
    </div>
  );
};

export default Caracteristicas;
