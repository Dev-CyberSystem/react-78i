import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <div className='d-flex flex-row justify-content-center flex-wrap my-2 py-1' style={{ maxWidth: '100%' }}>
      <Card style={{ width: '15rem', margin: '0.5rem' }}>
        <Card.Img variant="top" src="/public/vite.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
