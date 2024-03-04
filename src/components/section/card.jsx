import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <>
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://puntomice.com/wp-content/uploads/2023/01/FOTO-PRINCIPAL-1024x575.jpg" />
      <Card.Body>
        <Card.Title>CHE</Card.Title>
        <Card.Text>
          Che che venite a bariloche al al al cerro catedral
        </Card.Text>
        <Button variant="outline-dark">Ver más</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.plataforma10.com.ar/viajes/wp-content/uploads/2022/02/quebrada.webp" />
    <Card.Body>
      <Card.Title>QUEBRADINHO</Card.Title>
      <Card.Text>
        Quebradeño a mí me dicen porque nací en la quebrada
      </Card.Text>
      <Button variant="outline-dark">Ver más</Button>
    </Card.Body>
  </Card>
  </>
  );
}


export default Cards;