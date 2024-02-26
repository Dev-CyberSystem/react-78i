import { Container, Row, Col } from "react-bootstrap";
import Products from "../../components/products/Products";


const Home = () => {

  




  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Home</h1>
          </Col>
        </Row>
      </Container>
      <Products />

    </>
  );
};

export default Home;
