import {Card, CardGroup} from 'react-bootstrap';

const GrupoTarjetas = () => {
  return (
  <>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src= "holder.js/100px160"/>
        <Card.Body>
          <Card.Title>LOS 7 MARIDOS DE EVELYN HUGO</Card.Title>
          <Card.Text>
            Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar
            la verdad sobre su vida llena de glamour y de escándalos.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">AR$ 24.300,00</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>LOS CUATRO ACUERDOS</Card.Title>
          <Card.Text>
            El doctor Miguel Ruiz nos propone en este libro un sencillo procedimiento para eliminar
            todas aquellas creencias heredadas que nos limitan y substituirlas por otras que 
            a nuestra realidad interior y nos conducen a la libertad.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">AR$ 19.200,00</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>MI DESEO DE ODIARTE</Card.Title>
          <Card.Text>
            Hay amores que son imposibles de olvidar. Sentimientos que perduran mas alla
            del tiempo y la distancia Deseos irresistibles que ni el peligro consigue aplacar.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">AR$ 17.300,00</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  </>
);
}

export default GrupoTarjetas