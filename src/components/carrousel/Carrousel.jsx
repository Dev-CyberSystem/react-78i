import Carousel from 'react-bootstrap/Carousel';


const Carrousel = () => {
  return (
    <div className='w-100 h-25'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://picsum.photos/id/237/200/300"

        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://picsum.photos/id/237/200/300"

        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://picsum.photos/id/237/200/300"

        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carrousel