import { Card, Button } from 'react-bootstrap';

const MiCard = ({ titulo, contenido, imagenUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '1em' }}>
      <Card.Img variant="top" src={imagenUrl} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{contenido}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
};

export default MiCard;
