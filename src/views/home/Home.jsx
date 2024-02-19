import Aside from "../../components/aside/Aside";
import Cards from "../../components/cards/Cards";
import Navigation from "../../components/navigation/Navigation";
import Footer from "./../../components/footer/Footer";
import Intro from "../../components/intro/Intro";
import { Container, Row, Col } from "react-bootstrap/";
import "./styleHome.css";
import Carrusel from "../../components/carrusel/Carrusel";

const Home = () => {
  return (
    <>
      <Container fluid className="cont">
        <Row>
          <Navigation className="nav" />
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
        <Row className="footer">
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Home;
