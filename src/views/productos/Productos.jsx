import { React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableProducts from "../../components/table/TableProducts";
import FormProducts from "../../components/form/FormProducts";



const Productos = () => {
  return (
    <>
      <h1>Usuarios</h1>

      <Container>
        <Row>
          <Col>
            <FormProducts/>
          </Col>
          <Col>
            <TableProducts />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Productos;
