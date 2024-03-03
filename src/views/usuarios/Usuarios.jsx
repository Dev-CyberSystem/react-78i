import { React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableUsers from "../../components/table/TableUsers";
import FormUsers from "../../components/form/FormUsers";



export const Usuarios = () => {
  return (
    <>
      <h1>Usuarios</h1>

      <Container>
        <Row>
          <Col>
            <FormUsers/>
          </Col>
          <Col>
            <TableUsers />
          </Col>
        </Row>
      </Container>
    </>
  );
}
