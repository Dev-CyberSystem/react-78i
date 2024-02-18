import {Card, Col, Row} from 'react-bootstrap';
import './card.css'
import Boton from '../button/Boton';

import image1 from '../../assets/img/obelisco.jpg'
import image2 from '../../assets/img/salinas.jpg'
import image3 from '../../assets/img/Trevelin.jpg';
import image4 from '../../assets/img/Vedia.jpg'
import image5 from '../../assets/img/Mar del plata.jpg'
import image6 from '../../assets/img/Ushuaia.jpg'


const cards = [
    {
        id: 1,
        title: 'El Obelisco',
        image: image1
    },
    {
        id: 2,
        title: 'Salinas',
        image: image2
    },
    {
        id: 3,
        title: 'Trevelin',
        image: image3
    },
    {
        id: 4,
        title: 'Vedia',
        image: image4
    },
    {
        id: 5,
        title: 'Mar del Plata',
        image: image5
    },
    {
        id: 6,
        title: 'Ushuaia',
        image: image6
    },

]


const Tarjetas = () => {
  return (
    <Row xs={1} md={3} className="g-4 container-row">
      {cards.map((tarjeta) => (
        <Col key={tarjeta.id} className='card-Column'>
          <Card className='cardBody'>
            <Card.Img className='cardImg' variant="top" src={tarjeta.image} />
            <Card.Body>
              <Card.Title className='card-tittle'>{tarjeta.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          <Boton />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Tarjetas
