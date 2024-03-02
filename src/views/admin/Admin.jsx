import { Container, Row, Col } from "react-bootstrap";
import FormProductos from "../../components/formProductos/FormProductos";
import TableProducts from "../../components/tablas/TableProducts";

const Admin = () => {
  return (
    <>
      <h1>Admin</h1>

      <Container>
        <Row>
          <Col>
            <FormProductos />
          </Col>
          <Col>
            <TableProducts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
