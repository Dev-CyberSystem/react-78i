import PropTypes from 'prop-types';
import { Container, Row, Col } from "react-bootstrap";
import FormProductos from "../../components/formProductos/FormProductos.jsx";
import TableProducts from "../../components/Tablas/TableProducts.jsx";
import TableUsers from '../../components/Tablas/TableUsers.jsx';

const Admin = () => {

  return (
    <>
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
          <h1>USUARIOOOS</h1>
          <TableUsers/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Admin.propTypes = {
  funcionProps: PropTypes.func
}

export default Admin;