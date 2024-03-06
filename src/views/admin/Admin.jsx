import { Container, Row, Col } from "react-bootstrap";
import FormProductos from "../../components/formProductos/FormProductos";
import TableProducts from "../../components/tablas/TableProducts";
import TableUsers from "../../components/tablas/TableUsers";

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
      <Container>
        <Row>
          <Col>
            <h1>Usuarios</h1>
           <TableUsers />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
