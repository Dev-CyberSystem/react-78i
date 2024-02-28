import { Container, Row, Col } from "react-bootstrap";
import FormUsuario from "../../components/formUsuario/FormUsuario";
import TableUsuarios from "../../components/tablas/TableUsuarios";

const Admin = () => {
  return (
    <>
      <h1>Admin</h1>

      <Container>
        <Row>
          <Col>
            <FormUsuario />
          </Col>
          <Col>
            <TableUsuarios />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
