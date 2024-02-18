import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

const Cards = () => {
  return (
    <>
    
      <div class ="text-uppercase fluid footer-text text-center m-2 "><h4>NOVEDADES</h4>
    </div>
    <div class = "row d-flex justify-content-between col-12 m-1 p-1">
    <Card style={{ width: '20rem' }} class= "card">
      <Card.Img class="img-card" src="./src/img/card1.png" />
      <Card.Body>
        <Card.Title>UNIFORMES</Card.Title>
        <Card.Text>
          Comenzó la venta de uniformes en el local escolar, con gran variedad de talles.
        </Card.Text>
        <Button class="btn">Ver más</Button>
      </Card.Body>
    </Card>  

    <Card style={{ width: '20rem' }}>
      <Card.Img class="img-card" src="./src/img/card2.png" />
      <Card.Body>
        <Card.Title>FICHA MÉDICA</Card.Title>
        <Card.Text>
          A partir del 15/03/2024, personal del SIPROSA trabajará nuestra institución.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>  

    <Card style={{ width: '20rem' }}>
      <Card.Img class="img-card" src="./src/img/card3.png" />
      <Card.Body>
        <Card.Title>HORARIOS DE ATENCIÓN</Card.Title>
        <Card.Text>
          Informate sobre nuestros horarios de atención a padres en ambos turnos.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>   

    </div>
    </>
  )
}

export default Cards
