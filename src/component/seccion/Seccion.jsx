import {Button, Card, CardGroup} from 'react-bootstrap';
import './seccion.css'
const Seccion = () => {
  return (
    <>
    <div>
      
      <div>
      <div class ="text-uppercase fluid footer-text text-center m-2 "><h4>OFERTA EDUCATIVA</h4>
    </div>
      <CardGroup>
      <Card>
        <Card.Img class="img-card" src="./src/img/nivelInicial.png"  />
        <Card.Body>
          <Card.Title>NIVEL INICIAL</Card.Title>
          <Card.Text>
          El nivel inicial es la primera etapa educativa, también conocida como educación preescolar. Se trata del ciclo de formación que se lleva a cabo antes de la educación primaria. 
La educación inicial es un servicio educativo que se brinda a niñas y niños menores de seis años de edad. Su propósito es potencializar su desarrollo integral.
          </Card.Text>
        </Card.Body>
        
        <Button class="btn">Matrícula 2024</Button>
        
      </Card>
      <Card>
        <Card.Img class="img-card" src="./src/img/nivelPrimario.png"  />
        <Card.Body>
          <Card.Title>NIVEL PRIMARIO</Card.Title>
          <Card.Text>
          El nivel primario es el segundo tramo educativo de los sistemas nacionales de educación y forma parte del tramo de educación básica. La edad de referencia del nivel primario abarca, según el país, a los niños y niñas de entre 6 y 12 años. El nivel primario es obligatorio para lograr la formación básica, fundamental para el Nivel Secundario.
          </Card.Text>
        </Card.Body>
        <Button class="btn">Matrícula 2024</Button>
      </Card>
      
    </CardGroup>
      </div>
    </div>
    </>
  )
}

export default Seccion


