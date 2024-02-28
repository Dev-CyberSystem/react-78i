import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { InscripcionesContext } from "../../context/InscContext";
import PropTypes from "prop-types";

const CardAlumnoInsc = () => {
  const { inscripciones } = useContext(InscripcionesContext);

  return (
    <>
      <h1>Inscripciones</h1>

      <Container>
        {inscripciones.length === 0 ? (
          <h1>No hay inscripciones aún</h1>
        ) : (
          <Row>
            {inscripciones.map((insc) => (
              <Col key={insc.id} xs={12} md={4} sm={6} lg={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Nombre: {insc.nombre}</Card.Title>
                    <Card.Text>Edad: {insc.edad}</Card.Text>
                    <Card.Text>Nacimiento: {insc.nacimiento}</Card.Text>
                    <Button variant="success">Editar datos</Button>
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

// PropTypes should be defined for the component, not for inscripciones
CardAlumnoInsc.propTypes = {
  inscripciones: PropTypes.array,
};

export default CardAlumnoInsc;