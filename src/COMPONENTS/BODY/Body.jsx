import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Body = () => {
    const imageUrl = 'https://img.freepik.com/vector-premium/cute-dibujos-animados-pequenas-medusas-azules_188253-3519.jpg';

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://cdn0.ecologiaverde.com/es/posts/5/3/1/diente_de_leon_4135_1_600.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Imagen 1e</h3>
                        <p>Descripción del primer slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://plazasesamo.com/files/s3fs-public/2020-06/621x552_CienciayMatematicas.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Imagen 2</h3>
                        <p>Descripción del segundo slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://img.freepik.com/vector-premium/cute-dibujos-animados-pequenas-medusas-azules_188253-3519.jpg" />
                            <Card.Body>
                                <Card.Title>Card 1</Card.Title>
                                <Card.Text>
                                    Contenido de la card 1.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://img.freepik.com/vector-premium/cute-dibujos-animados-pequenas-medusas-azules_188253-3519.jpg" />
                            <Card.Body>
                                <Card.Title>Card 2</Card.Title>
                                <Card.Text>
                                    Contenido de la card 2.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://img.freepik.com/vector-premium/cute-dibujos-animados-pequenas-medusas-azules_188253-3519.jpg" />
                            <Card.Body>
                                <Card.Title>Card 3</Card.Title>
                                <Card.Text>
                                    Contenido de la card 3.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Body;