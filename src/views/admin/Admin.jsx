import FormProducts from "../../components/formProducts/FormProducts";
import { Container, Row, Col } from "react-bootstrap";
import TablaProductos from "../../components/tablaProducto/TablaProductos";
import { FormUsers } from "../../components/formUsers/FormUsers";
import TablaUsers from "../../components/tablaUsers/TablaUsers";

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <FormProducts />
          </Col>
          <Col><TablaProductos /></Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
