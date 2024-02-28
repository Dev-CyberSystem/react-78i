import React, { useContext } from "react";
import { InscripcionesContext } from "../../context/InscContext";
import { Button, Table } from "react-bootstrap";

const TablaInsc = () => {
  const { inscripciones } = useContext(InscripcionesContext);

  return (
    <>
      {inscripciones.length === 0 ? (
        <h5 className="text-center">Aún no hay inscripciones</h5>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Fecha de nacimiento</th>
              <th>Domicilio</th>
              <th>Teléfono</th>
              <th>Mail</th>
              <th>Grado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inscripciones.map((insc, index) => (
              <tr key={index}>
                <td>{insc.id}</td>
                <td>{insc.nombre}</td>
                <td>{insc.edad}</td>
                <td>{insc.nacimiento}</td>
                <td>{insc.domicilio}</td>
                <td>{insc.telefono}</td>
                <td>{insc.mail}</td>
                <td>{insc.grado}</td>
                <td>
                  <Button variant="primary">Editar</Button>{" "}
                  <Button variant="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TablaInsc;