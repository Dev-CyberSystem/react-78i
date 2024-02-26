import Aside from "../../components/aside/Aside";
import Cards from "../../components/cards/Cards";
import Intro from "../../components/intro/Intro";
import { Container, Row, Col } from "react-bootstrap/";
import "./styleHome.css";
import Carrusel from "../../components/carrusel/Carrusel";

const Home = () => {
  return (
    <>
      <Container fluid className="cont">
        <Row>
        </Row>
        <Row>
          <Col className="intro">
            <Intro />
          </Col>
        </Row>
        <Row>
          <Carrusel />
        </Row>
        <Row>
          <Col className="cards" lg={8}>
            <Cards />
          </Col>
          <Col className="sidebar">
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
