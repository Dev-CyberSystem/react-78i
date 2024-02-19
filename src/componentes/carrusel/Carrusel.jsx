import Carousel from 'react-bootstrap/Carousel';
import Carr

const Carrusel = () => {
  return (
    <div className='contenedor'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/img/libros.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/img/libros2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/img/libros3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
      
    </div>
);
}

export default Carrusel
