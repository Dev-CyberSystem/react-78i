import {Carousel, Image} from 'react-bootstrap';
import './slider.css'

const Slider = () => {
  return (
    <div className="contenedor">
     <Carousel>
       <Carousel.Item>
       <Image className="img" src="src/assets/img/libros.jpg" fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="img" src="src/assets/img/libros2.jpg" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="img" src="src/assets/img/libros3.jpg" fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
    </div>
  )
}

export default Slider
