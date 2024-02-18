import {Carousel,  Image} from 'react-bootstrap';
import './slider.css'

const Slider = () => {
  return (
    <div className='container'>
        <Carousel className='home-carousel'>
          <Carousel.Item className='carousel-item'>
            <Image className='img' src="src/assets/img/hornocal.jpg" alt="Hornocal" />
            <Carousel.Caption>
              <h3>El Hornocal</h3>
              <p>La serranía de Hornocal es una sierra ubicada a 25 kilómetros de la ciudad de Humahuaca en la provincia de Jujuy en la Argentina.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
          <Image className='img' src="src/assets/img/lagosanroqueVCP.jpg" alt="Lago San Roque" />
            <Carousel.Caption>
              <h3>Lago San Roque</h3>
              <p>El Dique San Roque es una represa ubicada en el departamento Punilla, provincia de Córdoba, República Argentina. Forma un embalse de nombre homónimo en cuyas márgenes se han desarrollado importantes centros urbanos.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
          <Image className='img' src="src/assets/img/Trevelin.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Trevelin</h3>
              <p>
              Trevelin es una localidad de Argentina situada en la región de la Patagonia, en el departamento Futaleufú de la provincia del Chubut.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Slider