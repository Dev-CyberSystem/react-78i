import Carousel from 'react-bootstrap/Carousel';




const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/banner.png"
          alt="Primera imagen"
        />
      </Carousel.Item>

    </Carousel>
  )
}

export default Carrousel
