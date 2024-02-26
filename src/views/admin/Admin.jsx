import { Container, Row, Col } from "react-bootstrap";
import FormProductos from "../../components/formProductos/FormProductos";
import TableProducts from "../../components/tablas/TableProducts";
import FormUsers from "../../components/users/formUsers";
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
        <Row>
          <Col>
            <FormUsers />
          </Col>
          <Col>
            <TableUsers />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
