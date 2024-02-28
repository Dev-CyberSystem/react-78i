import { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import  { UsuariosProvider }  from "../../context/UsuariosContext";

import PropTypes from "prop-types";

const Usuarios = () => {
  
  const { usuarios } = useContext(UsuariosProvider);

  return (
    <>
      <h1>Usuarios</h1>

      <Container>
        {usuarios.lenght === 0 ? (
          <h1>No hay usuarios</h1>
        ) : (
          <Row>
            {usuarios.map((usu) => (
              <Col key={usu.id} xs={12} md={4} sm={6} lg={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{usu.nombre}</Card.Title>
                    <Card.Text>Email: {usu.email}</Card.Text>
                    <Button variant="success">Comprar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

Usuarios.propTypes = {
  usuarios: PropTypes.array,
};

export default Usuarios;
