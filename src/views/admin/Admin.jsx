import FormProducts from "../../components/formProducts/FormProducts";
import { Container, Row, Col } from "react-bootstrap";
import TablaProductos from "../../components/tablaProducto/TablaProductos";
import TablaUsers from "../../components/tablaUsers/TablaUsers";

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <FormProducts />
          </Col>
          <Col><TablaProductos />
          </Col>
        </Row>
        <br />
        <hr />
        <br />
        <Row>
          <Col>
          <h1>Tabla usuarios</h1>
          <TablaUsers/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
