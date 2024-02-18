import Carousel from 'react-bootstrap/Carousel';
import './carruselll.css'


const Carruselll = () => {
  return (
    <>
     <div>
      <Carousel id="carr-style" className="carousel-responsive">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./src/img/escuela1.png"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="./src/img/escuela2.png"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/img/escuela3.png"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}

export default Carruselll
