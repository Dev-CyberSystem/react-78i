import { Card, CardGroup } from "react-bootstrap";
import "./styleCards.css"

const Cards = () => {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="src\assets\1c5178d7185c8530fe216f28711f286f.jpg" />
          <Card.Body className="body-card">
            <Card.Title>Jujutsu Kaisen</Card.Title>
            <Card.Text>
            "Jujutsu Kaisen" es un anime que sigue la historia de Yuji Itadori, un estudiante de secundaria con habilidades físicas excepcionales, quien se involucra en el mundo de los hechiceros malditos después de ingerir un objeto maldito poderoso. Con la ayuda de la escuela de hechicería Jujutsu High, Yuji se une a un grupo de estudiantes para exterminar maldiciones y proteger a la humanidad. La serie combina acción intensa, momentos emocionales y un mundo rico en mitología japonesa para ofrecer una experiencia emocionante y adictiva a los espectadores.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="src\assets\6f69d59a4c3679031ee48495b53505be.jpg" />
          <Card.Body className="body-card">
            <Card.Title>Evangelion</Card.Title>
            <Card.Text>
            "Neon Genesis Evangelion" es un anime de mechas y ciencia ficción que sigue la historia de Shinji Ikari, un joven reclutado para pilotar un robot gigante llamado Evangelion para proteger a la humanidad de misteriosas criaturas conocidas como "Ángeles". La serie aborda temas profundos como la soledad, la identidad, y el significado de la existencia, mientras explora las complejidades psicológicas de sus personajes. Con un estilo visual único y una trama llena de giros inesperados, Evangelion ha dejado una marca duradera en la cultura del anime desde su estreno en 1995. Su impacto cultural y su legado continúan siendo influyentes en la industria del entretenimiento.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="src\assets\b17a6135c1709ca60fbd038ca91b4712.jpg" />
          <Card.Body className="body-card">
            <Card.Title>Bungo Stray Dogs</Card.Title>
            <Card.Text>
            "Bungo Stray Dogs" es un anime que sigue las aventuras de Atsushi Nakajima, un joven huérfano con poderes sobrenaturales que se une a la Agencia de Detectives Armados, una organización que combate amenazas sobrenaturales en Yokohama. Los personajes están basados en famosos escritores y sus obras literarias, cada uno con habilidades únicas. La serie combina acción, comedia y drama mientras explora los conflictos internos y las relaciones entre los miembros de la agencia. Con una animación vibrante y personajes carismáticos, "Bungo Stray Dogs" ofrece una experiencia emocionante y cautivadora para los espectadores.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Cards;
