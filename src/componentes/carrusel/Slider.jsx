import {Carousel, Image} from 'react-bootstrap';
import './slider.css'

const Slider = () => {
  return (
    <div className="contenedor">
     <Carousel>
       <Carousel.Item>
       <Image className="img" src="src/assets/img/libros.jpg" fluid />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="img" src="src/assets/img/libros2.jpg" fluid />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="img" src="src/assets/img/libros3.jpg" fluid />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
    </div>
)
}

export default Slider
