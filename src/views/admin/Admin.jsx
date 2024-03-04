<<<<<<< HEAD
import FormUsuarios  from "../../componentes/formulario/FormUsuarios";
import TablaUsuarios from "../../componentes/tabla/TablaUsuarios";

const Admin = () => {
    return (
        <div>
            <h1>Página Admin</h1>
            <FormUsuarios/>
            <TablaUsuarios/>
        </div>
    )
} 

export default Admin
=======
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
>>>>>>> c3b355c910369594c1d61c5810473cc48188773f
