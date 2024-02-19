import {Card, CardGroup} from 'react-bootstrap';

const GrupoTarjetas = () => {
  return (
  <>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src= "src/assets/img/Los siete maridos de Evelyn Hugo.jpg"/>
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
        <Card.Img variant="top" src="src/assets/img/Los Cuatro Acuerdos.jpg" />
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
        <Card.Img variant="top" src="src/assets/img/El poder de las palabras.jpg" />
        <Card.Body>
          <Card.Title>EL PODER DE LAS PALABRAS</Card.Title>
          <Card.Text>
          Nuestra mente es mucho más maleable de lo que creemos y, a pesar de que conservamos toda la vida la misma capacidad de aprender que tenemos de chicos, con el tiempo vamos perdiendo la necesidad y la motivación para hacerlo. 
          Así, empezamos a convencernos de lo que no podemos: o somos malos para la matemática, o no nacimos para la música, o no podemos manejar nuestra ira, o nos es imposible superar el miedo
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">AR$ 18.300,00</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  </>
);
}

export default GrupoTarjetas