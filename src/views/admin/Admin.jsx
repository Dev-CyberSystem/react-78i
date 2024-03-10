import { Container, Row, Col } from "react-bootstrap";
import FormProductos from "../../components/formProductos/FormProductos";
import TableProducts from "../../components/tablas/TableProducts";
import FormUsuarios from "../../components/formUsuarios/FormUsuarios";
import TablaUsuarios from "../../components/tablas/TablaUsuarios";



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
<TablaUsuarios/>
  </Col>
</Row>
      </Container>
    </>
  );
};

export default Admin;
