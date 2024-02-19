import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css'
function Carrusel() {
    return (
      <div className='carrusel '>
          <Carousel slide={false}>
            <Carousel.Item>
                <img
                    className="d-flex w-100"
                    src="https://hard-digital.com.ar/files/Pc%20Gamer%20Asus%20Tuf%20Gaming%20Intel%20I3%20+%208Gg%20+%201660Ti%20+%20480Gb/1.jpg"

                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Pc Gamer Intel 10400f + 32Gb + 1024Gb + Gtx 2050ti</h3>
                 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-flex w-100"
                    src=" https://hard-digital.com.ar/public/files/Pc%20Gamer%20Intel%2010400f%20+%2016Gb%20+%20512Gb%20+%20Gtx%201650/1.webp"
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Pc Gamer Intel 10400f + 16Gb + 512Gb + Gtx 1650</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-flex w-100"
                    src="https://www.lacuracao.pe/media/catalog/product/s/g/sgmp91.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Pc Gamer Intel 10400f + 8Gb + 256Gb + Gtx 1650</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Carrusel;
